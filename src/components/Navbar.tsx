import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav className="navbar blue darken-2">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">React + TS Todo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Todo List</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
            </ul>
        </div>
    </nav>
)
