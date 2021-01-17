import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import styles from './App.module.css';

const Modal = ({ openModal, closeModal, largePhoto, comments, id, setComments }) => {
    const result = comments.map(item => <Comment key={item.id} {...item} />)

    if (!openModal) {
        return null;
    }

    return <div className={styles.modalContainer}>
        <div className={styles.modalWindow}>
            <button className={styles.closeModal} onClick={closeModal}>&times;</button>
            <div className={styles.modalContent}>
                <div className={styles.left}>
                    {!largePhoto ? <div>LOADING...</div> : <img src={largePhoto} alt='full' />}
                    <Form setComments={setComments} comments={comments} id={id} />
                </div>
                <div className={styles.right}>
                    {result.length > 0 ? result : "Be the first to comment on this photo"}
                </div>
            </div>
        </div>
    </div>
}

const Comment = ({ text, date }) => {
    const maxDate = new Date(date);
    const convertDate = maxDate.toISOString().slice(0, 10);
    const convertTime = maxDate.toISOString().slice(11, 19);
    return (
        <div>
            <span>{`${convertDate}   ${convertTime}`}</span>
            <p>{text}</p>
        </div>
    )
}

const Form = ({ comments, setComments }) => {
    const [state, onChange] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        let newComment = {
            text: state,
            date: new Date(),
            id: Math.random()
        }
        if (state) {
            setComments([...comments, newComment])
            onChange('')
        }
    }

    const onChangeHandler = (e) => {
        const value = e.target.value
        onChange(value)
    }

    return <form>
        <input onChange={onChangeHandler} name="comment" value={state} placeholder='Your comment'></input>
        <Button onClick={onSubmit}>Send</Button>
    </form>
}

export default Modal



