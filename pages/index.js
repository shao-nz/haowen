import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '/components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hao Wen</title>
        <meta name="description" content="Hao Wen's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel='preload'
          href='/fonts/NeutralFace/NeutralFace-Bold.otf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/NeutralFace/NeutralFace.otf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Rokkitt/static/Rokkitt-Regular.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <div className={styles.description}>
          <Image src="/photo.jpg" alt="photo of Hao Wen" width={494} height={509} />
          <h1 className={styles.title}>
            I&#39;m Hao Wen.
          </h1>
          THIRD YEAR ARCHITECTURE STUDENT
          <div className={styles.links}>
            <ul>
              <li>
                <Link href='/resume'>
                  <a>RESUME</a>
                </Link>
              </li>
              <li>
                <Link href='/portfolio'>
                  <a>PORTFOLIO</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
