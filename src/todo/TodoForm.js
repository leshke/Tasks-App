import React, { useState } from 'react';
import { TodoListContext } from './state';
import { Button, Form } from 'react-bootstrap';

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

    return <>
        <hr />
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Add new task to your Todo list</Form.Label>
                <Form.Control type="text" placeholder="Write your task..." onChange={handleOnChange} value={value} />
                <Form.Text className="text-muted">
                    Never put off till tomorrow what you can do today.
                    </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
        </Form>
    </>
}

export default TodoForm;