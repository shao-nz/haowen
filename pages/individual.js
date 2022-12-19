import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Individual.module.css'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

export default function Individual() {
  return (
      <div className={styles.container}>
      <Head>
        <title>Hao Wen</title>
        <meta name="description" content="Hao Wen's portfolio" />
        <link rel="icon" href="/favicon.svg" />
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
        <p>Coming soon...</p>
      </main>
      <Footer />
    </div>
  )
}