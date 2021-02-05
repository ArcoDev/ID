import React, { useContext } from "react";
import "./header.scss";
import Nav from "./Nav";
import { ThemeContext } from "../../context/ThemeProvider";
import { LangContext } from "../../context/LangProvider";
import Button from "../general/Button";

const Header = () => {
    const { fileTexts, langName, setLang, locale } = useContext(LangContext);

    const { actTheme } = useContext(ThemeContext);

    return (
        <>
            <Nav />
            <header>
                <div className="logo"></div>
                <div className="header-content">
                    <div className="container">
                        <div className="textos">
                            <h1 className={actTheme}>
                                {fileTexts.header.title}
                            </h1>
                            <h2 className={actTheme}>
                                {fileTexts.header.subTitle}
                            </h2>
                        </div>
                        <Button
                            text={fileTexts.header.button}
                            classes="rounded-btn gradient-btn"
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
