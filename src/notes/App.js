import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Sidebar from './Navbar/Navbar';
import AppHeader from './Header/Header';
import Workspace from './Workspace/Workspace';
import NotesProvider from './state';

class App extends React.Component {
  render() {
    return (
      <NotesProvider>
        <Layout>
          <Sidebar />
          <Layout className="site-layout">
            <AppHeader />
            <Workspace />
          </Layout>
        </Layout>
      </NotesProvider>
    );
  }
}

export default App;
