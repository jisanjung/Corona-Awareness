import React, { useState } from 'react';
import logo from "../images/logo.png";
import "../sass/hamburger.css";

const Header = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(menu => !menu);
    }

    return (
        <header className="flex flex-between align-center">
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
            </a>
            <button className={`hamburger hamburger--squeeze ${(menu) ? 'is-active' : ''}`} type="button" onClick={toggleMenu}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </header>
    )
}

export default Header
