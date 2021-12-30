import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '/components/Footer'
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
            I'm Hao Wen.
          </h1>
          THIRD YEAR ARCHITECTURE STUDENT
          <div className={styles.links}>
            <ul>
              <li>
                <a href='/resume'>RESUME</a>
              </li>
              <li>
                <a href='/portfolio'>PORTFOLIO</a>
              </li>
              <li>
                <a href='/contact'>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
