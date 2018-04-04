import React from "react";
import "./comps.css";
// import { Link } from "react-router-dom";

const NavBar = props => (
    <nav className="navbar navbar-default">

            <ul className="nav navbar-nav navbar-dark">
                <li className="home">
                    <a className="navbar-brand center" href="/">Clicky Game</a>
                    <p></p>
                </li>
                <li>
                    <p className="navbar-brand center"> Click an Image to Begin!</p>
                </li>
                <li>
                    <p className="navbar-brand center"> Score : 0 {props.score} | Top Score : 0 {props.topscore}</p>                    
                </li>
            </ul>
    </nav>

);

export default NavBar;