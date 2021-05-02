import React, { useState } from 'react';
import "./styles.css";

const initialState = {
    name: "",
    description: ""
}

const AddTask = () => {

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }



    return (
        <div className="add-task">
            <p>Add New Task Info</p>
            <div className="add-task__input-field">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Task Name"
                    onChange={handleChange}
                    size={25}
                />
            </div>

            <div className="add-task__input-field">
                <input
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    onChange={handleChange}
                    size={25}
                />
            </div>
            <div className="add-task__submit-button">
                <button className="add-button">
                    Add This Task
                </button>
            </div>
        </div>
    );
};

export default AddTask;