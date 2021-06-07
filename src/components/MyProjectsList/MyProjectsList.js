import React from 'react';
import "./styles.scss"
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import Project from "../Project/Project";

const MyProjectsList = ({ projects }) => {

    return (
        <div className="project-list">
            <div className="project-list__projects">
                {
                    projects.map((project, key) => {
                        return (
                            <Project key={key} project={project} />
                        )
                    })
                }
            </div>
            <aside className="project-list__add-project">
                <ThemeChanger />
            </aside>
        </div>
    );
};

export default MyProjectsList;