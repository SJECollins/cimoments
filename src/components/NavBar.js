import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from "../assets/gwlogo.png"
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom"
import { useCurrentUser } from "../contexts/currentUserContexts"

const NavBar = () => {
    const currentUser = useCurrentUser()
    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create">
            <i className="fas fa-plus-square"></i> Add Post
        </NavLink>
    )

    const loggedInIcons = (<>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed">
            <i className="fas fa-stream"></i> Feed
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked">
            <i className="fas fa-heart"></i> Liked
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to="/"
            onClick={() => { }}>
            <i className="fas fa-sign-out-alt"></i>Sign Out
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}>
            <img src={currentUser?.profile_image} />
        </NavLink>
    </>)
    const loggedOutIcons = (<>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin">
            <i className="fas fa-sign-in-alt"></i>Sign In
        </NavLink>
        <NavLink
            to="/signup"
            className={styles.NavLink}
            activeClassName={styles.Active}>
            <i className="fas fa-user-plus"></i>Sign Up
        </NavLink>
    </>)

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                        >
                            <i className="fas fa-home"></i>Home
                        </NavLink>

                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar