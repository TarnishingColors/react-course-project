import { SET_TO_LIGHT, SET_TO_NIGHT } from "../constants/actionTypes";

const initialState = {
    theme: "light"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_LIGHT:
            return { ...state, theme: "light" }
        case SET_TO_NIGHT:
            return { ...state, theme: "night" }
        default:
            return state
    }
}

export default reducer;