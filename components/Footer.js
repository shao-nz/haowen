import styles from "/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
       <footer className={styles.footer}>
        <Link
            href="/"
            rel="noopener noreferrer">
            <a>Home Page</a>
        </Link>
        <Link
            href="/about"
            rel="noopener noreferrer">
            <a>About Me</a>
        </Link>
        
    </footer>  
    )
}