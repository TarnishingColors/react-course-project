import React, { useState } from 'react';
import data from "./data";
import Task from "../Task/Task";
import "./styles.css"

const MyTodoList = () => {

    let [tasks, setTasks] = useState(data);

    return (
        <div className="todo-list">
            {
                tasks.map((task, key) => {
                    return (
                        <Task key={key} task={task} />
                    )
                })
            }
        </div>
    );
};

export default MyTodoList;