import { combineReducers } from 'redux';

import themeReducer from './theme';
import projectsntasksReducer from './projectsntasks';

export const reducers = combineReducers({
    theme: themeReducer,
    projectsntasks: projectsntasksReducer
});
