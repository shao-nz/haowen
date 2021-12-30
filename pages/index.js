import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '/components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hao Wen</title>
        <meta name="description" content="Hao Wen's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.showcase}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={200} />
        </div>
        <div className={styles.description}>
          <h1 className={styles.title}>
            I'm Hao Wen.
          </h1>
          An architecture student.
        </div>

        <div className={styles.grid}>
        </div>
      </main>
      <Footer />
    </div>
  )
}
