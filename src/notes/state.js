import React, { useContext } from 'react'

const initialState = {
    notes: [
        { header: 'John', text: 'Terry', id: 1, date: Date().slice(0,24) },
        { header: 'John', text: 'Terry', id: 2, date: Date().slice(0,24) },
        { header: 'John', text: 'Terry', id: 3, date: Date().slice(0,24) },
    ],
}

const MyContext = React.createContext()

export const NotesContext = () => useContext(MyContext)

const NotesProvider = ({ children }) => {
    return (
        <MyContext.Provider value={initialState}>
            {children}
        </MyContext.Provider>
    )
}
export default NotesProvider