import React, { useState } from 'react';
import data from "./data";
import Task from "../Task/Task";
import AddTask from "../AddTask/addTask";
import "./styles.scss"
import ThemeChanger from "../ThemeChanger/ThemeChanger";

const MyTodoList = () => {

    let [tasks, setTasks] = useState(data);

    const changeTaskStatus = (taskId) => {
        setTasks(
            tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task)
        )
    }

    const addTask = (formData) => {
        setTasks(
            [...tasks, {
                id: tasks.length + 1,
                name: formData.name,
                description: formData.description,
                completed: false
            }]
        )
        console.log(tasks)
    }

    return (
        <div className="todo-list">
            <div className="todo-list-tasks">
                {
                    tasks.map((task, key) => {
                        return (
                            <Task key={key} task={task} changeTaskStatus={changeTaskStatus} />
                        )
                    })
                }
            </div>
            <aside className="app__addTask">
                <ThemeChanger />
                <AddTask addTask={addTask}/>
            </aside>
        </div>
    );
};

export default MyTodoList;