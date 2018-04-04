import React from "react";
import "./comps.css";

const Header = props => (
    <div className="header" style={{backgroundImage: `url(${props.backgroundImg})`}}>
    {props.children}
    </div>
)

export default Header;
