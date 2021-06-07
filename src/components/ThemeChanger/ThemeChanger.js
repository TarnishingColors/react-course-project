import React, { useContext } from 'react';
import "./styles.scss";
import { HiSun } from "react-icons/hi";
import { BsMoon } from "react-icons/all";
import { AppContext } from "../../context";

const ThemeChanger = () => {

    const { theme, setTheme } = useContext(AppContext);

    const clickHandler = () => {
        if (theme === "light") {
            setTheme("night");
        } else {
            setTheme("light");
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