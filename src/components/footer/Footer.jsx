import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="lama blog" width={50} height={50} />
                    <h1 className={styles.logoText}>Lamablog</h1>
                </div>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                    necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                    porro sequi, totam minima consequuntur, aspernatur deleniti vero
                    repellendus dorales.
                </p>
                <div className={styles.icons}>
                    <a href="https://facebook.com" aria-label="Reach out to me via Facebook" target="_blank">

                        <Image src="/facebook.png" alt="" width={18} height={18} />
                    </a>
                    <a href="https://instagram.com" aria-label="Reach out to me via Instagram" target="_blank">

                        <Image src="/instagram.png" alt="" width={18} height={18} />
                    </a>
                    <a href="https://tiktok.com" aria-label="Reach out to me via Tiktok" target="_blank">

                        <Image src="/tiktok.png" alt="" width={18} height={18} />
                    </a>
                    <a href="https://youtube.com" aria-label="Reach out to me via Youtube" target="_blank">

                        <Image src="/youtube.png" alt="" width={18} height={18} />
                    </a>
                </div>
            </div>
            <nav className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
