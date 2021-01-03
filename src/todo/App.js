import React from 'react';
import './App.css';
import TodoProvider from './state';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <TodoProvider >
      <div className="App">
        <h3>Todo list</h3>
        <TodoList />
        <TodoForm />
      </div>
    </TodoProvider>
  )
}

export default App;
