import React, {useContext} from 'react';
import Button from "../Button/Button";
import "./styles.scss"
import { AppContext } from "../../context";

const Task = ({ task, changeTaskStatus }) => {
    let { id, name, description, completed } = task;

    const { theme } = useContext(AppContext);
    
    const handleOnClick = () => {
        changeTaskStatus(id);
    }

    return (
        <div className={`task ${completed ? "green" : "red"} ${theme}`}>
            <div className="task__name">{name}</div>
            <div className="task__description">{description}</div>
            <div className="task__status">{completed}</div>
            <Button handleOnClick={handleOnClick} buttonText="Change Status" />
        </div>
    );
};

export default Task;