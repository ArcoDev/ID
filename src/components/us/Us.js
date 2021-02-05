import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { LangContext } from "../../context/LangProvider";

import "./us.scss";

const Us = () => {
    const { fileTexts } = useContext(LangContext);

    return (
        <div className="container-us">
            <h2 className="title-us">{fileTexts.us.weAre}</h2>
            <div className="container-objectives">
                <div className="object">
                    <div className="xpLogo"></div>
                    <h3>{fileTexts.us.title1}</h3>
                    <p>{fileTexts.us.subTitle1}</p>
                </div>
                <div className="object">
                    <div className="effectiveLogo"></div>
                    <h3>{fileTexts.us.title2}</h3>
                    <p>{fileTexts.us.subTitle2}</p>
                </div>
                <div className="object">
                    <div className="committedLogo"></div>
                    <h3>{fileTexts.us.title3}</h3>
                    <p>{fileTexts.us.subTitle3}</p>
                </div>
            </div>
        </div>
    );
};

export default Us;
