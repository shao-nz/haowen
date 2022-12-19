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
                  <li>MASTER RENDER</li>
                  <li>PROJECT BRIEF</li>
                  <li>MASTER SECTIONS</li>
                  <li>MASTER PLANS</li>
                  <li>RENDERINGS</li>
                </ul>
              </div>

              <div id='ripple'
              ref={(e) => listRefs.current.push(e)}>
                <li>THE RIPPLE</li>
                <ul>
                  <li>PROJECT BRIEF <br/> MASTER RENDER</li>
                  <li>PARTI DIAGRAM <br/> MASTER PLAN</li>
                  <li>PERSPECTIVE SECTION</li>
                  <li>INTERIOR RENDERING <br/> DETAIL DIAGRAM</li>
                </ul>
              </div>

              <div id='slipway'
              ref={(e) => listRefs.current.push(e)}>
                <li>THE SLIPWAY</li>
                <ul>
                  <li>MASTER RENDER</li>
                  <li>PROJECT SITE</li>
                  <li>PLAN <br/> RENDERING</li>
                  <li>PHYSICAL MODELS</li>
                </ul>
              </div>

              <div id='weaving'
              ref={(e) => listRefs.current.push(e)}>
                <li>THE WEAVING</li>
                <ul>
                  <li>MASTER RENDER</li>
                  <li>SITE ANALYSIS</li>
                  <li>DIAGRAMS BY BRIAN YUNG & AUDREY CHAK <br/> RENDERING</li>
                </ul>
              </div>

              <div id='ephemerality'
              ref={(e) => listRefs.current.push(e)}>
                <li>EPHEMERALITY</li>
                <ul>
                  <li>MASTER RENDER</li>
                  <li>PLAN</li>
                  <li>INTERIOR RENDER</li>
                </ul>
              </div>

              <div id='courtyard'
              ref={(e) => listRefs.current.push(e)}>
                <li>COURTYARD HOUSE</li>
                <ul>
                  <li>MASTER RENDER</li>
                  <li>DEMOLITION PLAN <br/> PROPOSAL PLAN</li>
                  <li>PROPOSAL SECTION <br/> DESIGN CHOICES</li>
                </ul>
              </div>
            </ul>
          </div>
          }

          <div className={styles.slides}>
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website2.jpg' alt='resume' />
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
                  src='/pages/website9.jpg' alt='ripple-1' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website10.jpg' alt='ripple-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website11.jpg' alt='ripple-3' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website12.jpg' alt='ripple-4' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website13.jpg' alt='ripple-5' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website14.jpg' alt='slipway-1' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website15.jpg' alt='slipway-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website16.jpg' alt='slipway-3' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website17.jpg' alt='slipway-4' /> 
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website18.jpg' alt='slipway-5' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website19.jpg' alt='weaving-1' />
              <img ref={(element) => imageRefs.current.push(element)} 
                  src='/pages/website20.jpg' alt='weaving-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website21.jpg' alt='weaving-3' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website22.jpg' alt='weaving-4' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website23.jpg' alt='ephemerality-1' />
              <img ref={(element) => imageRefs.current.push(element)} 
                  src='/pages/website24.jpg' alt='ephemerality-2' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website25.jpg' alt='ephemerality-3' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website26.jpg' alt='ephemerality-4' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website27.jpg' alt='courtyard-1' />
              <img ref={(element) => imageRefs.current.push(element)}
                  src='/pages/website28.jpg' alt='courtyard-2' />
              <img ref={(element) => imageRefs.current.push(element)} 
                  src='/pages/website29.jpg' alt='courtyard-3' />
              <img ref={(element) => imageRefs.current.push(element)} 
                  src='/pages/website30.jpg' alt='courtyard-4' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}