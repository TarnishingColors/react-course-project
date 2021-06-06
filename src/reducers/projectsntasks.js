import { ADD_TASK, CHANGE_TASK_STATUS } from "../constants/actionTypes";
import projectsntasks from "../projectsntasks";
import { normalizeState } from "../normalizeState";

const initialState = normalizeState(projectsntasks);

const reducer = (state = initialState, action) => {
    const index = Object.entries(state.tasksById).length;
    switch (action.type) {
        case ADD_TASK:
            return {
                projectsById: {
                    ...state.projectsById,
                    [action.payload.projectId]: {
                        ...state.projectsById[action.payload.projectId],
                        tasksIds: [
                            ...state.projectsById[action.payload.projectId].tasksIds,
                            index + 1
                        ]
                    }
                },
                tasksById: {
                    ...state.tasksById,
                    [index + 1]: {
                        id: index + 1,
                        name: action.payload.formData.name,
                        description: action.payload.formData.description,
                        completed: false
                    }
                }
            };
        case CHANGE_TASK_STATUS:
            return {
                projectsById: state.projectsById,
                tasksById: {
                    ...state.tasksById,
                    [action.payload.id]: {
                        ...state.tasksById[action.payload.id],
                        completed: !state.tasksById[action.payload.id].completed
                    }
                }
            }
        default:
            return state
    }
}

export default reducer;