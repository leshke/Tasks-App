import React, { useState } from 'react'
import './App.css';
import {TodoListContext} from './state';

const TodoList = () => {
    const {todos} = TodoListContext()
    return <ul>
        {todos.map(item => <Todo key={item.id} {...item} />)}
    </ul>
}

const Todo = (props) => {
    const {removeTodo, toggleTodo } = TodoListContext()
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
        <li id={props.id} className={props.complete ? 'complete' : null}>
            <button onClick={handleRemove}>delete</button>
            <span>{props.task}</span>
            <input type='checkbox' checked={check} onChange={handleOnChange}></input>
        </li>
    </>
}

export default TodoList;