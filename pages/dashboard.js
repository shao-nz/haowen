import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import Head from 'next/head'
import styles from '../styles/Dashboard.module.css';
import React from 'react';

export default function Dashboard() {
  const [pictures, setPictures] = React.useState([]);

  async function PostPictures(fileName) {
    const url='/api/pictures';
    const data={
  
    };
  }
  
  async function GetPictures() {
    const url='/api/pictures';
    const params={
      headers:{
        'Content-Type': 'application/json'
      },
      method:'GET'
    };
    const response = await fetch(url, params);
    const responseData = await response.json();
    setPictures(responseData.data);
    // console.log(pictures);
  }

  async function DeletePicture(id) {
    const url='/api/pictures';
    const data={
      id: id
    };
    const params={
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      method:'DELETE'
    };
    const response = await fetch(url, params);
    const responseData = await response.json();
    console.log(responseData);
    GetPictures()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hao Wen - Dashboard</title>
        <meta name="description" content="Hao Wen - Dashboard" />
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
        <div className={styles.main}> 
          <h1>Dashboard - control yo shit in here</h1>
          <div className={styles.insertPictures}>
            <h2>Insert yo images</h2>
          </div>
          <div className={styles.removePictures}>
            <h2>Remove yo images</h2>
            <button onClick={GetPictures}>Display Images</button>
            <ul>
              <div className={styles.allPictures}>
                {
                  pictures.map((picture) => {
                    return (
                        <div className={picture.fileName} key={picture._id}>
                          <li id={picture._id}>{picture._id} {picture.fileName}
                            <button onClick={() => DeletePicture(picture._id)}>Delete</button>
                          </li>
                        </div>
                    )
                  })
                }
              </div>
            </ul>
          </div>
          <div className={styles.updateImages}>
            <h2>Update yo images</h2>
          </div>
        </div>
        <Footer/>
      </div>
  )
}
