import styles from "/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
       <footer className={styles.footer}>
        <a
        href="/"
        // target="_blank"
        rel="noopener noreferrer"
        >
        Home Page{' '}
        <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
        </a>
        <a
        href="/about"
        // target="_blank"
        rel="noopener noreferrer"
        >
        About Me{' '}
        <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
        </a>
    </footer>  
    )
}