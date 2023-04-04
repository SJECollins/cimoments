import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'
import logo from '../assets/gwlogo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45" />
                    </Navbar.Brand>
                </ NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            exact 
                            to="/"><i className="fas fa-home"></i> Home</NavLink>
                        <NavLink 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            to="/signin"><i className="fas fa-sign-in-alt"></i> Sign In</NavLink>
                        <NavLink 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            to="/signup"><i className="fas fa-user-plus"></i> Sign Up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar