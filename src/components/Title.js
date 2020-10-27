import React from 'react'

const Title = (props) => {

    const { color, size, content } = props;
    const titleStyle = {
        fontSize: `${size}`,
        color: `${color}`
    }

    return (
        <div>
            <h1 style={titleStyle} className="title">{content}</h1>
        </div>
    )
}

export default Title