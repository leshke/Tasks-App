import React, { useContext, useReducer } from 'react';

const initialState = [{
    id: 1,
    task: "Find a job",
    complete: false
}, {
    id: 2,
    task: "Learn React Native",
    complete: false
}, {
    id: 3,
    task: "Go gym",
    complete: true
}, {
    id: 4,
    task: "Learn JS",
    complete: true
}, {
    id: 5,
    task: "Learn React/Redux",
    complete: true
}]

const TodoContext = React.createContext()

export const TodoListContext = () => useContext(TodoContext)

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            let newItem = {
                id: state.length ? state[state.length - 1].id + 1 : 1,
                task: action.item,
                complete: false
            }
            return [...state, newItem]
        case 'toggle':
            return state.map(task => {
                return task.id === Number(action.itemId) ? { ...task, complete: !task.complete } : { ...task };
            });
        case 'remove':
            return state.filter(task => {
                return Number(action.itemId) !== task.id
            });
        default:
            return state;
    }
}

const TodoProvider = ({ children }) => {
    // WITH USE REDUCER
    const [todos, dispatch] = useReducer(reducer, initialState)

    const addTodo = (item) => dispatch({ type: 'add', item })
    const toggleTodo = (itemId) => dispatch({ type: 'toggle', itemId })
    const removeTodo = (itemId) => dispatch({ type: 'remove', itemId })

    // WITH USE STATE
    // const [todos, setTodo] = useState(initialState)

    // const addTodo = (item) => {
    //     let newItem = {
    //         id: todos[todos.length - 1].id + 1,
    //         task: item,
    //         complete: false
    //     }
    //     setTodo([...todos, newItem])
    // }

    // const toggleTodo = (id) => {
    //     let completed = todos.map(task => {
    //         return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    //     });
    //     setTodo(completed);
    // }

    // const removeTodo = (id) => {
    //     let filtered = todos.filter(task => {
    //         return Number(id) !== task.id
    //     });
    //     setTodo(filtered);
    // }

    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            toggleTodo,
            removeTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider