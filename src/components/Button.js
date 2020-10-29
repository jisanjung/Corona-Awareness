import React from 'react'

const Button = (props) => {

    const { type, dest, content } = props;

    return (
        <div className="btn-wrap">
            <a href={dest} className={`btn round bold ${type === "primary" ? "primary-btn" : "light-btn"}`}>{content}</a>
        </div>
    )
}

export default Button
