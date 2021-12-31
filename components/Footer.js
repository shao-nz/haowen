import styles from "/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
       <footer className={styles.footer}>
           Made possible by <Link href='https://github.com/YddEd'><a>Eddy Shao</a></Link> and <Link href='https://github.com/SSBdevelopment'><a>Stephen</a></Link>
        </footer>  
    )
}