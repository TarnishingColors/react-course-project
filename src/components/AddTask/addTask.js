import React, { useContext, useState } from 'react';
import "./styles.scss";
import Button from "../Button/Button"
import { AppContext } from "../../context";

const initialState = {
    name: "",
    description: ""
}

const AddTask = ({addTask}) => {

  const { theme } = useContext(AppContext);

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addTask(formData);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit} className="add-task">
            <p className={`${theme}`}>Add New Task Info</p>
            <div className="add-task__input-field">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Task Name"
                    onChange={handleChange}
                    value={formData.name}
                    size={25}
                />
            </div>

            <div className="add-task__input-field">
                <input
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    onChange={handleChange}
                    value={formData.description}
                    size={25}
                />
            </div>
            <div className="add-task__submit-button">
                <Button type="submit" buttonText="Add This Task" />
            </div>
        </form>
    );
};

export default AddTask;