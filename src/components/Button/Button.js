import React from 'react';
import "./styles.css"

const Button = ({ id, completed }) => {

    let handleOnClick = () => {
        console.log(`Task ${id} completed status = ${completed}`);
    }

    return (
        <button onClick={handleOnClick} className="button">Check</button>
    );
};

export default Button;