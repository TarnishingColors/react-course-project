import { ADD_TASK, CHANGE_TASK_STATUS } from "../constants/actionTypes";

export const addTask = (formData, projectId)  => {
    return {
        type: ADD_TASK,
        payload: { formData: formData, projectId: projectId}
    }
}

export const changeTaskStatus = (id) => {
    return {
        type: CHANGE_TASK_STATUS,
        payload: { id: id }
    }
}