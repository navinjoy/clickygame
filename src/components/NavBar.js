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
                    <p className="navbar-brand center"> Score : {props.userScore} | Top Score : {props.maxScore}</p>                    
                </li>
            </ul>
    </nav>

);

export default NavBar;