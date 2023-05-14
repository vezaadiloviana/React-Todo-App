import React from 'react'
import "../assets/css/Button.css"

const Button = (props) => {
    return (
        <button type='button' className={`btn btn-${props.variant}`}>
            {props.text}
        </button>
    )
}

export default Button