import React from 'react';
import "./styles.css"

const Button = ({ id, completed, changeTaskStatus }) => {

    let handleOnClick = () => {
        console.log(`Task ${id} completed status = ${completed}`);
    }

    return (
        <button onClick={() => changeTaskStatus(id)} className="button">Change status</button>
    );
};

export default Button;