import styles from "../styles/Footer.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Made possible by <Link href='https://github.com/YddEd'><a>Eddy Shao</a></Link>
        </footer>  
    )
}