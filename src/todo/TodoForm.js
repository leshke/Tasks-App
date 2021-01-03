import React, { useState } from 'react';
import './App.css';
import { TodoListContext } from './state';

const TodoForm = () => {
    const { addTodo } = TodoListContext()
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {
            addTodo(value)
        }
        setValue('')
    }

    const handleOnChange = (e) => {
        setValue(e.currentTarget.value)
    }

    return <form onSubmit={handleSubmit}>
        <label>Add new todo</label>
        <input value={value} onChange={handleOnChange}></input>
        <button type="submit">add</button>
    </form>
}

export default TodoForm;