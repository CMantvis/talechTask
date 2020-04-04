import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link to="/"> <h3 className="navbar-brand"> LOGO PLACEHOLDER </h3></Link>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/products">List</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/products/create">New</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
