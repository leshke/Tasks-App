import React, { useState } from 'react';
import './App.css'
import Modal from './Modal';

const ImagesContent = ({ photos }) => {
    const res = photos.map(item => <ImageItem key={item.id} {...item} />)

    return <>
        <h1>Test App</h1>
        <div className='imagesWrapper'>{res}</div>
    </>
}

const ImageItem = ({ url, id }) => {

    const [open, settoggleModal] = useState(false)
    const [large, setLarge] = useState('')
    const [comments, setComments] = useState([])

    const getLargePhoto = async (id) => {
        let response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
        let photosFromServ = await response.json();
        setLarge(photosFromServ.url)
        setComments(photosFromServ.comments)
    }

    const openModal = (e) => {
        const id = Number(e.currentTarget.id)

        getLargePhoto(id)
        settoggleModal(true)

    }

    const closeModal = () => {
        settoggleModal(false)
    }

    return <div className='image'>
        <img onClick={openModal} id={id} src={url} alt='img' />
        <Modal id={id} setComments={setComments}
            comments={comments} largePhoto={large}
            closeModal={closeModal} openModal={open} />
    </div>
}

export default ImagesContent