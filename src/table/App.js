import React from 'react';
import styles from './App.module.css';
import MainAppProvider from './state';
import TableOfWorkers from './TableOfWorkers';

const TableApp = () => {
  return (
    <MainAppProvider>
      <div className={styles.App}>
        <h1>Salary Calculator</h1>
        <TableOfWorkers />
      </div>
    </MainAppProvider>
  )
}

export default TableApp;
