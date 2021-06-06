import React from 'react';
import "./styles.scss";
import { HiSun } from "react-icons/hi";
import { BsMoon } from "react-icons/all";
import { useDispatch, useSelector } from 'react-redux';
import { changeToLightTheme, changeToNightTheme } from "../../actions/changeTheme";

const ThemeChanger = () => {
    const dispatch = useDispatch();

    const { theme } = useSelector(state => state.theme);

    const clickHandler = () => {
        if (theme === "light") {
            dispatch(changeToNightTheme());
        } else {
            dispatch(changeToLightTheme());
        }
    }

    return (
        <div className="theme-changer">
            <input type="checkbox" className="checkbox" id="checkbox" onClick={clickHandler} />
            <label htmlFor="checkbox" className="label">
                <BsMoon className="fa-moon" size="20"/>
                <HiSun className="fa-sun" size="20"/>
                <div className="ball"></div>
            </label>
        </div>
    );
};

export default ThemeChanger;