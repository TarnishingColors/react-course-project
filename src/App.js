import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';

import MyTodoList from "./components/MyTodoList/MyTodoList";
import MyProjectsList from "./components/MyProjectsList/MyProjectsList";
import "./App.scss";
import {useSelector} from "react-redux";

function App() {

  const { theme } = useSelector(state => state.theme);

  const projects = useSelector(state => state.projectsntasks);

  /*const addTask = (formData, projectId) => {
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
    }*/

  return (
      <container className={`app ${theme}`}>
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
                              />
                          </Route>
                          <Redirect to="/" />
                      </Switch>
                  </Router>
              </div>
      </container>
  );
}

export default App;
