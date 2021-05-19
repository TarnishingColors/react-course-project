import React from 'react';
import Button from "../Button/Button";
import "./styles.scss"

const Task = ({ task, changeTaskStatus }) => {
    let { id, name, description, completed } = task;
    
    const handleOnClick = () => {
        changeTaskStatus(id);
    }

    return (
        <div className={`task ${completed ? "green" : "red"}`}>
            <div className="task__name">{name}</div>
            <div className="task__description">{description}</div>
            <div className="task__status">{completed}</div>
            <Button handleOnClick={handleOnClick} buttonText="Change Status" />
        </div>
    );
};

export default Task;