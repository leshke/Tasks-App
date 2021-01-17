import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavLink to="/todo">Todo List</NavLink>
                <NavLink to="/image-list">Fetch Images</NavLink>
                <NavLink to="/table">Salary Table</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Header;