import React, { useState } from 'react';
import Task from "../Task/Task";
import "./styles.scss"
import {Link, useParams} from "react-router-dom";
import AddTask from "../AddTask/addTask";
import Button from "../Button/Button";

const MyTodoList = ({ tasks, projects, addTask, changeTaskStatus }) => {


    let { id } = useParams();
    let taskIds;
    projects.forEach(p => {
        if (p.id == id) {
            taskIds = p.tasksIds;
        }
    });

    let tasksList = tasks.filter((task) => taskIds.includes(task.id));

    return (
        <div className="todo-list">
            <div className="todo-list__tasks">
                {
                    tasksList.map((task, key) => {
                        return (
                            <Task key={key} task={task} changeTaskStatus={changeTaskStatus} />
                        )
                    })
                }
            </div>
            <aside className="todo-list__addTask">
                <AddTask addTask={addTask} projectId={id}/>
                <Link to="/" className="todo-list__addTask__go-home">
                    <Button buttonText="Back To Home" />
                </Link>
            </aside>
        </div>
    );
};

export default MyTodoList;