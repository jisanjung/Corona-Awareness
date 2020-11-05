import React from 'react'
import Title from './Title'
import Text from "./Text"
import logo from "../images/logo.png"

const Footer = () => {

    const white = "#fff";
    const gray = "#8a8eaa";
    const dark = "#35404e";

    return (
        <footer>
            <div className="footer-banner section">
                <div className="container">
                    <Title color={white} size="1.75rem" content="What to do if infected:"/>
                    <Text color={white} content="Think you may have been infected or in contact with someone with COVID? Experiencing dry coughs or difficulty breathing? Call your healthcare provider for medical assistance immediately."/>
                </div>
            </div>
            <div className="footer-main section">
                <div className="container flex">
                    <div className="about">
                        <div className="logo">
                            <img src={logo} alt="Logo"/>
                        </div>
                        <Text color={gray} content="The disease was first identified in 2019 in Wuhan, China and has since spread globally, resulting in the 2019-2020 coronavirus pandemic."/>
                    </div>
                    <div className="more-info">
                        <Title color={dark} size="1.5rem" content="More Info"/>
                        <a href="#About"><Text color={gray} content="About"/></a>
                        <a href="#Symptoms"><Text color={gray} content="Symptoms"/></a>
                        <a href="#Prevention"><Text color={gray} content="Prevention"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
