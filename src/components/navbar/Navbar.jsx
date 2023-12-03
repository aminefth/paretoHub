import styles from "./navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
//TODO add social links tags for SEO 
const Navbar = () => {
    return (
        <header className={styles.container}>
            {/* TODO check blog content layer for bettre seo social links */}
            <div className={styles.social}>
                <a href="https://facebook.com" aria-label="Reach out to me via Facebook" target="_blank">

                    <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                </a>
                <a href="https://instagram.com" aria-label="Reach out to me via Instagram" target="_blank">
                    <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                </a>
                <a href="https://tiktok.com" aria-label="Reach out to me via Tiktok" target="_blank">

                    <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
                </a>
                <a href="https://youtube.com" aria-label="Reach out to me via Youtube" target="_blank">
                    <Image src="/youtube.png" alt="youtube" width={24} height={24} />
                </a>

            </div>
            <div className={styles.logo}>ParetoHub</div>

            <nav className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>Homepage</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <AuthLinks />
            </nav>
        </header>
    )
}

export default Navbar   