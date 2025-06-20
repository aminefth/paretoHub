import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{cat} Blog</h1>
            <article className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </article>
        </section>
    );
};

export default BlogPage;
