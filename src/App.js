import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';
import { AppContext } from "./context";

import MyTodoList from "./components/MyTodoList/MyTodoList";
import MyProjectsList from "./components/MyProjectsList/MyProjectsList";
import projectsntasks from "./projectsntasks";
import "./App.scss";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";


const normalizeState = (projectsntasks) => {
    let normalizedState = {};

    normalizedState.projectsById = projectsntasks.reduce((projects, item) => {
        projects[item.id] = {
            id: item.id,
            name: item.name,
            tasksIds: item.tasks.map((task) => task.id),
        };
        return projects;
    }, {});

    normalizedState.tasksById = projectsntasks
        .reduce((projects, item) => {
            projects = [...projects, ...item.tasks];
            return projects;
        }, [])
        .reduce((tasks, item) => {
            tasks[item.id] = item;
            return tasks;
        }, {});

    return normalizedState;
};


function App() {

  const [theme, setTheme] = useState("light");

  const [projects, setProjects] = useState(normalizeState(projectsntasks));
  console.log(projects);

  const addTask = (formData, projectId) => {
      const index = Object.entries(projects.tasksById).length
      setProjects({
          projectsById: {
              ...projects.projectsById,
              [projectId]: {
                  ...projects.projectsById[projectId],
                  tasksIds: [
                      ...projects.projectsById[projectId].tasksIds,
                      index + 1
                  ]
              }
          },
          tasksById: {
              ...projects.tasksById,
              [index + 1]: {
                  id: index + 1,
                  name: formData.name,
                  description: formData.description,
                  completed: false
              }
          }
      })
    }

    const changeTaskStatus = (id) => {
      setProjects({
          projectsById: projects.projectsById,
          tasksById: {
              ...projects.tasksById,
              [id]: {
                  ...projects.tasksById[id],
                  completed: !projects.tasksById[id].completed
              }
          }
      })
    }

  return (
      <container className={`app ${theme}`}>
          <AppContext.Provider value={{ theme, setTheme }}>
              <div className="app__main">
                  <Router>
                      <Switch>
                          <Route exact path="/">
                              <MyProjectsList projects={Object.keys(projects.projectsById).map(
                                  (id) => projects.projectsById[id]
                              )}/>
                          </Route>
                          <Route exact path="/project/:id">
                              <MyTodoList
                                  tasks={Object.values(projects.tasksById)}
                                  projects={Object.values(projects.projectsById)}
                                  addTask={addTask}
                                  changeTaskStatus={changeTaskStatus}
                              />
                          </Route>
                          <Redirect to="/" />
                      </Switch>
                  </Router>
              </div>
          </AppContext.Provider>
      </container>
  );
}

export default App;
