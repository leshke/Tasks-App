import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import ImagesContent from './Images';

const ImageListApp = () => {
  const [img, setImg] = useState([])
  const getPhotos = async () => {
    let response = await fetch('https://boiling-refuge-66454.herokuapp.com/images')
    let photosFromServ = await response.json();
    setImg(photosFromServ)
  }

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    img.length === 0 ?
      <div className={styles.preloader}>Loading...</div> :
      <ImagesContent photos={img} />
  )
}

export default ImageListApp;
