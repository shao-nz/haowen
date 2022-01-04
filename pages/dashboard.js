import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
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

  async function DeletePictures(id) {
    const url='/api/pictures';
    const params={
      headers:{
        'Content-Type': 'application/json'
      },
      method:'DELETE'
    };
  }

  return (
    <div className={styles.container}>
      <Navbar/>
        <div className={styles.main}> 
          <h1>Dashboard - control yo shit in here</h1>
          <div className={styles.insertImages}>
            <h2>Insert yo images</h2>
          </div>
          <div className={styles.removeImages}>
            <h2>Remove yo images</h2>
            <button onClick={GetPictures}>Display Images</button>
            <ul>
            {
              pictures.map((picture) => {
                return (
                    <li id={picture._id} key={picture._id}>{picture._id} {picture.fileName}</li>
                )
              })
            }
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
