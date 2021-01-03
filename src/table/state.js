import React, { useContext, useState } from 'react'

const initialState = {
    workers: [
        { name: 'John', surname: 'Terry', id: 1, workDays: 3, salary: 300, total: 900 },
        { name: 'Frank', surname: 'Lampard', id: 2, workDays: 4, salary: 400, total: 1600 },
        { name: 'David', surname: 'Luiz', id: 3, workDays: 6, salary: 350, total: 2100 },
        { name: 'Gareth', surname: 'Bale', id: 4, workDays: 30, salary: 800, total: 24000 }
    ],
    totalSalary: 28600
}

const MyContext = React.createContext()

export const AppContext = () => useContext(MyContext)

const MainAppProvider = ({ children }) => {
    const [workers, setWorkers] = useState(initialState.workers)
    const [totalSalary, setTotalSalary] = useState(initialState.totalSalary)

    const setData = (day, sal, itemId) => {
        const result = workers.filter(item => {
            if (itemId === item.id) {
                return {
                    ...item,
                    ...item.salary = sal,
                    ...item.workDays = day,
                    ...item.total = day * sal
                }
            }
            return item
        })
        
        setWorkers(result)

        const calcTotal = workers.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.total;
        }, 0);

        setTotalSalary(calcTotal)
    }

    return <MyContext.Provider value={{ workers, totalSalary, setData }}>
        {children}
    </MyContext.Provider>
}
export default MainAppProvider