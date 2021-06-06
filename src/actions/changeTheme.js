import { SET_TO_LIGHT, SET_TO_NIGHT } from "../constants/actionTypes";

export const changeToLightTheme = ()  => {
    return {
        type: SET_TO_LIGHT
    }
}

export const changeToNightTheme = () => {
    return {
        type: SET_TO_NIGHT
    }
}