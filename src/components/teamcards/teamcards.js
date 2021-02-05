import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { LangContext } from "../../context/LangProvider";

import "./teamcards.scss";

const Teamcards = () => {
    const { fileTexts } = useContext(LangContext);

    return (
        <div className="erase">
        <div className="container-card">
            <div className="identify">
                <h5>Luis Alejandro Reyes</h5>
                <p>Backend Programmer</p>
            </div>
            <div className="photo">
                
            </div>
        </div>
        </div>
    );
};

export default Teamcards;
 