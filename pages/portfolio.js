import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Portfolio.module.css'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

export default function Resume() {
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
        <div className={styles.portfolio}>
          <div className={styles.scrollbar}>
            <ul>
              <li>RESUME</li>
              <li>PYRMONT BATHHOUSE</li>
              <li>THE WEAVING</li>
              <li>HAVEN</li>
              <li>HOUSE OF CELEBRATIONS</li>
            </ul>
          </div>
          <div className={styles.imagecontainer}>
            <img src='/pages/website2.png' alt='page 1' />
            <img src='/pages/website3.jpg' alt='page 2' />
            <img src='/pages/website4.jpg' alt='page 3' />
            <img src='/pages/website5.jpg' alt='page 4' />
            <img src='/pages/website6.jpg' alt='page 5' />
            <img src='/pages/website7.jpg' alt='page 6' />
            <img src='/pages/website8.jpg' alt='page 7' />
            <img src='/pages/website9.jpg' alt='page 8' />
            <img src='/pages/website10.jpg' alt='page 9' />
            <img src='/pages/website11.jpg' alt='page 10' />
            <img src='/pages/website12.jpg' alt='page 11' />
            <img src='/pages/website13.jpg' alt='page 12' />
            <img src='/pages/website14.jpg' alt='page 13' />
            <img src='/pages/website15.jpg' alt='page 14' />
            <img src='/pages/website16.jpg' alt='page 15' />
            <img src='/pages/website17.jpg' alt='page 16' />
            <img src='/pages/website18.jpg' alt='page 17' />
            <img src='/pages/website19.jpg' alt='page 18' />
            <img src='/pages/website20.jpg' alt='page 19' />
            <img src='/pages/website21.jpg' alt='page 20' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}