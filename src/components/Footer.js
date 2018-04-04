import React from "react";
import "./comps.css";

const Footer = props => (
    <div className="footer" style={{backgroundImage: `url(${props.backgroundImg})`}}>
    {props.children}
    </div>
)

export default Footer;
