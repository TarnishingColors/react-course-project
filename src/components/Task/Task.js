import React, {useContext} from 'react';
import Button from "../Button/Button";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskStatus } from "../../actions/projectsntasks";

const Task = ({ task }) => {
    let { id, name, description, completed } = task;

    const { theme } = useSelector(state => state.theme);

    const dispatch = useDispatch();
    
    const handleOnClick = () => {
        dispatch(changeTaskStatus(id));
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