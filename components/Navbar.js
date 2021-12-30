import styles from "/styles/Navbar.module.css"
import Image from "next/image"

export default function NavBar() {
    return (
        <nav>
            <a
                className={styles.instagram}
                href='https://www.instagram.com/hao_portfolio/'
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src='/instagram.png' alt='Instagram logo' width={25} height={25}/>
            </a>
        </nav>
    )
}