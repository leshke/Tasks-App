import React, { useState } from 'react'
import { AppContext } from './state'

const TableOfWorkers = () => {
    const { workers, totalSalary } = AppContext()
    return <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Work Days</th>
                <th>Salary</th>
                <th>Total</th>
            </tr>
            {workers.map(item => <WorkerItem key={item.id} {...item} />)}
        </tbody>
        <tfoot>
            <tr colSpan="5">
                <td className="hidden-cell"></td>
                <td className="hidden-cell"></td>
                <td className="hidden-cell"></td>
                <td className="hidden-cell"></td>
                <td className='total'>Total: {totalSalary}</td>
            </tr>
        </tfoot>
    </table>
}

const WorkerItem = (props) => {
    const { setData } = AppContext()

    const [days, setDays] = useState(props.workDays)
    const [salary, setSalary] = useState(props.salary)

    const handleChangeDays = (e) => {
        setDays(e.currentTarget.value)
    }

    const handleChangeSalary = (e) => {
        setSalary(e.currentTarget.value)
    }

    const handleDays = (e) => {
        const id = Number(e.currentTarget.id);
        setData(days, salary, id)
    }

    return <tr id={props.id} onBlur={handleDays}>
        <td>{props.name}</td>
        <td>{props.surname}</td>
        <td><input type="number" onChange={handleChangeDays} value={days}></input></td>
        <td><input type="number" onChange={handleChangeSalary} value={salary}></input></td>
        <td>{props.total}</td>
    </tr>
}

export default TableOfWorkers