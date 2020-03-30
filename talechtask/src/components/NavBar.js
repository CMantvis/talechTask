import React from 'react'
import { Link } from "react-router-dom"
import "../styles/NavStyle.css"

function NavBar() {

    const linkStyle = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <nav className="navBar">
            <h3>LOGO PLACEHOLDER</h3>
            <ul className="nav-links">
                <Link style={linkStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={linkStyle} to="/products">
                    <li>List</li>
                </Link>
                <Link style={linkStyle} to="/products/create">
                <li>New</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar
