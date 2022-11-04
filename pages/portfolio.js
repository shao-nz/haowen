import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Portfolio.module.css'
import { useEffect, useState, useRef } from 'react';
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

export default function Portfolio() {
  const imageRefs = useRef(new Array());
  const listRefs = useRef(new Array());
  const [windowWidth, setWindowWidth] = useState();
  const options = {
    // rootMargin: '-10% 0px -10% 0px',
    threshold: 1.0,
  };
  // let myList = {
  //   'resume': [styles.sideNav, styles.hide].join(' '),
  //   'pyrmont': [styles.sideNav, styles.hide].join(' '),
  //   'weaving': [styles.sideNav, styles.hide].join(' '),
  //   'haven': [styles.sideNav, styles.hide].join(' '),
  //   'house': [styles.sideNav, styles.hide].join(' '),
  // };

  const hideListItem = ((section, intersecting) => {
    for (const ref of listRefs.current) {
      if (!ref) continue;
      if (ref.id === section) {
        ref.classList.add(styles.show)
      } else {
        ref.classList.remove(styles.show)
      }
    }
  });

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const observer = new IntersectionObserver((entries, observer) => {

      for (const [index,entry]  of entries.entries()) {
        const section = entry.target.alt.split('-')[0];
        hideListItem(section, entry.intersectionRatio);
      }
    }, options);

    for (const ref of imageRefs.current.reverse()) {
      ref && observer.observe(ref);
    };

    return () => observer.disconnect();
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
        <div className={styles.portfolio}>
          {
            windowWidth > 600 &&
            <div className={styles.sideNav}>
            <ul>
              <div id='resume'
              ref={(e) => listRefs.current.push(e)}>
                <li>RESUME</li>
              </div>
              
              <div id='pyrmont'
              ref={(e) => listRefs.current.push(e)}>
                <li>PYRMONT BATHHOUSE</li>
                <ul>
                  <li>PROJECT BRIEF</li>
                  <li>SECTIONS</li>
                  <li>PLANS</li>
                  <li>RENDERINGS</li>
                </ul>
              </div>

              <div id='weaving'
              ref={(e) => listRefs.current.push(e)}>
                <li>THE WEAVING</li>
                <ul>
                  <li>PROJECT OVERVIEW</li>
                  <li>ILLUSTRATIVE INTERPRETATION BY BRIAN YUNG</li>
                  <li>SITE ANALYSIS</li>
                  <li>PLAN AND SECTIONS BY BRIAN YUNG AND AUNDRY CHAK</li>
                  <li>RENDERING INPUTS</li>
                </ul>
              </div>

              <div id='haven'
              ref={(e) => listRefs.current.push(e)}>
                <li>HAVEN</li>
                <ul>
                  <li>PROJECT OVERVIEW</li>
                  <li>ILLUSTRATION INTERPRETATION</li>
                  <li>CONCEPT DEVELOPMENT</li>
                  <li>SECTION</li>
                  <li>HANDMADE MODEL</li>
                  <li>AFTER RELOCATION</li>
                </ul>
              </div>

              <div id='hall'
              ref={(e) => listRefs.current.push(e)}>
                <li>HALL OF CELEBRATION</li>
                <ul>
                  <li>TECHNICAL DRAWING</li>
                </ul>
              </div>
            </ul>
          </div>
          }

          <div className={styles.slides}>
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website2.png' alt='resume' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website3.jpg' alt='pyrmont-1' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website4.jpg' alt='pyrmont-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website5.jpg' alt='pyrmont-3' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website6.jpg' alt='pyrmont-4' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website7.jpg' alt='pyrmont-5' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website8.jpg' alt='pyrmont-6' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website9.jpg' alt='weaving-1' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website10.jpg' alt='weaving-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website11.jpg' alt='weaving-3' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website12.jpg' alt='weaving-4' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website13.jpg' alt='haven-1' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website14.jpg' alt='haven-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website15.jpg' alt='haven-3' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website16.jpg' alt='haven-4' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website17.jpg' alt='haven-5' /> 
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website18.jpg' alt='haven-6' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website19.jpg' alt='hall-1' />
              <img ref={(element) => imageRefs.current.push(element)} 
                  src='/pages/website20.jpg' alt='hall-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website21.jpg' alt='hall-3' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}