import React, { useEffect, useState } from 'react';
import './App.css';
import ImagesContent from './Images';

const App = () => {
  const [img, setImg] = useState([])
  
  const getPhotos = async () => {
    let response = await fetch('https://boiling-refuge-66454.herokuapp.com/images')
    let photosFromServ = await response.json();
    setImg(photosFromServ)
  }

  useEffect(() => {
    getPhotos()
  }, [])

  return <ImagesContent photos={img} />

}

export default App;
