import React from 'react';
import { Link } from "react-router-dom";

const MobileNav = (props) => {
    return (
        // show nav when menu is toggled on
        <nav style={{display: (props.menuState) ? "block" : "none"}}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Symptoms">Symptoms</a></li>
                <li><a href="#Prevention">Prevention</a></li>
                <Link to="/news"><li>Latest News</li></Link>
                <Link to="/tracker"><li>Tracker</li></Link>
            </ul>
        </nav>
    )
}

export default MobileNav
