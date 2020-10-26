import React from 'react'

const MobileNav = (props) => {
    return (
        <nav style={{display: (props.menuState) ? "block" : "none"}}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Symptoms</a></li>
                <li><a href="/">Precautions</a></li>
                <li><a href="/">Tracker</a></li>
            </ul>
        </nav>
    )
}

export default MobileNav
