import React from 'react';
import Button from "../Button/Button";
import "./styles.css"

const Task = ({ task, changeTaskStatus }) => {
    let { id, name, description, completed } = task;

    return (
        <div className={`task ${completed ? "green" : "red"}`}>
            <div className="task__name">{name}</div>
            <div className="task__description">{description}</div>
            <div className="task__status">{completed}</div>
            <Button id={id} completed={completed} changeTaskStatus={changeTaskStatus}/>
        </div>
    );
};

export default Task;