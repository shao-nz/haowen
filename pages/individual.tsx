import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Individual() {
  return (
      <div className="">
      <Head>
        <title>Hao Wen</title>
        <meta name="description" content="Hao Wen's portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar/>
      <main className="">
        <p>Coming soon...</p>
      </main>
      <Footer />
    </div>
  )
}