import React from 'react'
import "../assets/css/Button.css"
import PropTypes from "prop-types"

const Button = ({variant, text}) => {
    return (
        <button type='button' className={`btn btn-${variant}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
}

export default Button