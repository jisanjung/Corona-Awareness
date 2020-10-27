import React from 'react'

const Text = (props) => {

    const { color, size, content } = props;
    const textStyles = {
        fontSize: `${size}`,
        color: `${color}`
    }

    return (
        <div>
            <p style={textStyles} className="text">{content}</p>
        </div>
    )
}

export default Text
