import React from 'react';
import "./styles.scss"

const Button = ({ handleOnClick, buttonText }) => {

    return (
        <button onClick={handleOnClick} className="button">{buttonText}</button>
    );
};

export default Button;