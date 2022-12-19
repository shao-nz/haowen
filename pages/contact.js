import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader'

export default function Contact() {
  const googlemap = useRef(null);
  const wilkinsonCoords = {lat: -33.8887733, lng: 151.192203};
  const marker = 'images/marker.svg';

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
      version: 'weekly',
    });

    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        mapId: '14003129647bca5c',
        center: wilkinsonCoords,
        zoom: 16,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      });

      new google.maps.Marker({
        position: wilkinsonCoords,
        map,
        title: 'Wilkinson Building',
        icon: marker,
      });
    });
  });
  
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
        <div className={styles.contactContainer}>
        <h3>Contact Me</h3>
        <br/>
        <p>Phone: (+61) 405 826 000</p>
        <p>Email: wenhao2001083@gmail.com</p>
        <p>
          <u><a href="https://www.linkedin.com/in/haowenarchitecture/">LinkedIn</a></u>
        </p>
        <p>
          <u><a href="https://www.instagram.com/hao_portfolio/">Instagram</a></u>
        </p>
        <p>
          <u><a href="https://issuu.com/haowenarchitecture">Issuu</a></u>
        </p>
        </div>
        <div className={styles.map} ref={googlemap}/>
      </main>
      <Footer />
    </div>
  )
}