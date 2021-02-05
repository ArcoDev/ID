import React from "react";
import "./button.scss";

const Button = ({ text, classes, onClick }) => {
    return (
        <button className={classes} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
