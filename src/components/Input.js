import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input type="text" placeholder="Search..." className="input" onChange={props.search}/>
        </div>
    )
}

export default Input