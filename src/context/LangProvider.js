import React, { useEffect, useState } from "react";

export const LangContext = React.createContext();

const LangProvider = (props) => {
    let locale;

    useEffect(() => {
        if (window.location.href.search("/en") !== -1) {
            setLang("en-US");
        } else {
            setLang("es-MX");
        }
    }, []);

    if (window.location.href.search("/en") !== -1) {
        locale = "en-US";
    } else {
        locale = "es-MX";
        window.history.pushState("", "", "/es");
    }
    const [lang, setLang] = useState(locale);

    const fileTexts = require(`./../assets/i18n/${lang}.json`);

    const langName = locale === "en-US" ? "English" : "Español";
    return (
        <LangContext.Provider value={{ fileTexts, langName, setLang, locale }}>
            {props.children}
        </LangContext.Provider>
    );
};

export default LangProvider;
