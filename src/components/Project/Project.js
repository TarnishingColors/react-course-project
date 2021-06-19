import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";
import { useSelector } from "react-redux";

const Project = ({ project }) => {
    let { id, name } = project;

    const { theme } = useSelector(state => state.theme);

    return (
        <Link to={`/project/${id}`} className={`project ${theme}`}>
            <div className="project__name">{name}</div>
        </Link>
    );
};

export default Project;