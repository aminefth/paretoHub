import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
//TODO: remove cache no store for production
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <article className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.slug}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </article>
    </section>
  );
};

export default CategoryList;
