import React, { useState } from 'react';
import data from "./data";
import Task from "../Task/Task";
import "./styles.css"

const MyTodoList = () => {

    let [tasks, setTasks] = useState(data);

    let changeTaskStatus = (taskId) => {
        setTasks(
            tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task)
        )
    }

    return (
        <div className="todo-list">
            {
                tasks.map((task, key) => {
                    return (
                        <Task key={key} task={task} changeTaskStatus={changeTaskStatus} />
                    )
                })
            }
        </div>
    );
};

export default MyTodoList;