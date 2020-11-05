import React from 'react'
import Title from './Title'
import Text from "./Text"

const Footer = () => {

    const white = "#fff";

    return (
        <footer>
            <div className="footer-banner section">
                <div className="container">
                    <Title color={white} size="1.75rem" content="What to do if infected:"/>
                    <Text color={white} content="Think you may have been infected or in contact with someone with COVID? Experiencing dry coughs or difficulty breathing? Call your healthcare provider for medical assistance immediately."/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
