import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss"
import { AppContext } from "../../context";

const Project = ({ project }) => {
    let { id, name } = project;

    const { theme } = useContext(AppContext);

    return (
        <Link to={`/project/${id}`} className={`project ${theme}`}>
            <div className="project__name">{name}</div>
        </Link>
    );
};

export default Project;