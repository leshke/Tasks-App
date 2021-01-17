import React, { useState } from 'react'
import styles from './App.module.css';
import { TodoListContext } from './state';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const TodoList = () => {
    const { todos } = TodoListContext()
    return <ul>
        <TransitionGroup className="todo-list">
            {todos.map(item =>
                <CSSTransition key={item.id} timeout={600} classNames="item">
                    <Todo {...item} />
                </CSSTransition>)}
        </TransitionGroup>
        {!todos.length ? <li>No tasks</li> : null}
    </ul>
}

const Todo = (props) => {
    const { removeTodo, toggleTodo } = TodoListContext()
    const [check, setCheck] = useState(props.complete)

    const handleOnChange = (e) => {
        if (check) {
            setCheck(false)
        }
        else {
            setCheck(true)
        }
        toggleTodo(e.currentTarget.parentNode.id)
    }

    const handleRemove = (e) => {
        removeTodo(e.currentTarget.parentNode.id)
    }

    return <>
        <li id={props.id} className={props.complete ? styles.complete : null}>
            <button className={styles.btnDel} onClick={handleRemove}>x</button>
            <span className={styles.task}>{props.task}</span>
            <input type='checkbox' checked={check} onChange={handleOnChange}></input>
        </li>
    </>
}

export default TodoList;