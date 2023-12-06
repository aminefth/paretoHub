import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return <main className={styles.container}>
    <Featured />
    <CategoryList />
    <section className={styles.content}>
      <CardList page={page} />
      <Menu />
    </section>
  </main>;
}
