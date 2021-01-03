import React from 'react';
import './App.css';
import MainAppProvider from './state';
import TableOfWorkers from './TableOfWorkers';

const App = () => {
  return (
    <MainAppProvider>
      <TableOfWorkers />
    </MainAppProvider>
  )
}

export default App;
