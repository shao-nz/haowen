import styles from "/styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a>HW.</a>
            </Link>
            <Link
                className={styles.instagram}
                href='https://www.instagram.com/hao_portfolio/'
                target="_blank"
                rel="noopener noreferrer">
                <a>
                    <Image 
                        src='/instagram.png' 
                        alt='Instagram logo' 
                        width={25} 
                        height={25}
                    />
                </a>
            </Link>
        </nav>
    )
}