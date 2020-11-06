import React from 'react'

const MobileNav = (props) => {
    return (
        // show nav when menu is toggled on
        <nav style={{display: (props.menuState) ? "block" : "none"}}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Symptoms">Symptoms</a></li>
                <li><a href="#Prevention">Prevention</a></li>
                <li><a href="/">Latest News</a></li>
                <li><a href="/">Tracker</a></li>
            </ul>
        </nav>
    )
}

export default MobileNav
