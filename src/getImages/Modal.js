import React, { useState } from 'react'
import './App.css';

const Modal = ({ openModal, closeModal, largePhoto, comments, id, setComments }) => {

    let result = comments.map(item => <Comment key={item.id} {...item} />)

    if (!openModal) {
        return null;
    }

    return <div className='modalContainer'>
        <div className='modalWindow'>
            <button className='closeModal' onClick={closeModal}>&times;</button>
            <div className='modalContent'>
                <div className='left'>
                    <img src={largePhoto} alt='full' />
                    <Form setComments={setComments} comments={comments} id={id} />
                </div>
                <div className='right'>
                    {result}
                </div>

            </div>
        </div>

    </div>
}

const Comment = ({ text, date }) => {
    const convertDate = new Date(date * 1000).toISOString().slice(3, 19).replace('T', ' ')
    return (
        <div>
            <span>{convertDate}</span>
            <p>{text}</p>
        </div>
    )
}


const Form = ({ comments, setComments }) => {
    const [state, onChange] = useState({
        name: "",
        comment: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
        let newComment = {
            text: state.comment,
            date: new Date(),
            id: Math.random()
        }

        setComments([...comments, newComment])
        console.log(comments);
    }

    const onChangeHandler = (e) => {
        const value = e.target.value
        onChange({
            ...state,
            [e.target.name]: value
        })
    }

    return <form>
        <input onChange={onChangeHandler} name="name" value={state.name} placeholder='Your name'></input>
        <input onChange={onChangeHandler} name="comment" value={state.comment} placeholder='Your comment'></input>
        <button onClick={onSubmit}>Send</button>
    </form>
}

export default Modal



