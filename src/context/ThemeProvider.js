import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const themeLocal = localStorage.getItem("themeLocal");
    const [actTheme, setActTheme] = useState(themeLocal || "light");

    const changeTheme = (themeSelected) => {
        setActTheme(themeSelected);
        localStorage.setItem("themeLocal", themeSelected);
    };
    const htmlTag = document.querySelector("html");

    htmlTag.setAttribute("data-theme", actTheme);
    return (
        <ThemeContext.Provider value={{ actTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
