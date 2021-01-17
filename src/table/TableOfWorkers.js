import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { AppContext } from './state'
import styles from './App.module.css'

const TableOfWorkers = () => {
    const { workers, totalSalary } = AppContext()
    return <Table striped bordered hover variant="dark">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Work Days</th>
                <th>Salary per Day</th>
                <th>Total (salary * days)</th>
            </tr>
            {workers.map(item => <WorkerItem key={item.id} {...item} />)}
        </tbody>
        <tfoot>
            <tr>
                <td className={styles.totalSalary} colSpan="5">Final Total: {totalSalary}</td>
            </tr>
        </tfoot>
    </Table>
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