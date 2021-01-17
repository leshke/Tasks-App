import React from 'react';
import styles from './App.module.css';
import TodoProvider from './state';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <TodoProvider >
      <div className={styles.App}>
        <h1>Todo list</h1>
        <TodoList />
        <TodoForm />
      </div>
    </TodoProvider>
  )
}

export default TodoApp;
