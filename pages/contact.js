import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader'

export default function Contact() {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyDQrxgW1mgjVB0JT1K8sBXXv48rmI-ZOXY',
      version: 'weekly',
    });

    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        mapId: '14003129647bca5c',
        center: {lat: -33.8204125, lng: 151.1111421},
        zoom: 16,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      });
    });
  });
  
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
        <h3>Find me here:</h3>
        <div className={styles.map} ref={googlemap}/>
      </main>
      <Footer />
    </div>
  )
}