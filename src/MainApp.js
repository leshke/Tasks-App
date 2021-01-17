import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ImageListApp from './Get-Images/App';
import Header from './Header';
import TableApp from './Table/App';
import TodoApp from './Todo/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainApp = () => {
    return <>
        <BrowserRouter>
            <Header />
            <Switch>
                <Redirect exact from='/' to='todo' />
                <Route path='/todo' component={TodoApp} />
                <Route path='/table' component={TableApp} />
                <Route path='/image-list' component={ImageListApp} />
            </Switch>
        </BrowserRouter>
    </>
}

export default MainApp;