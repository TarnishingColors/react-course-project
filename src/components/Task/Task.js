import React from 'react';
import Button from "../Button/Button";
import "./styles.css"

const Task = ({ task }) => {
    let { id, name, description, completed } = task;

    return (
        <div className="task">
            <div className="task__name">{name}</div>
            <div className="task__description">{description}</div>
            <div className="task__status">{completed}</div>
            <Button id={id} completed={completed} />
        </div>
    );
};

export default Task;