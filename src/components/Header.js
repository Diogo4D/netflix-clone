import React from "react";

import './Header.css'
import logo from './imgs/Netflix_2015_logo.png'

const Header = () => {
    return (
        <header className="black">
            <div className="header--logo">
                <a href="/">
                    <img src={logo}></img>
                </a>
            </div>
            <div className="header--usuario"></div>
        </header>
    );
}
 
export default Header;