import React from "react";

const Card = ({ name, description, location, cost }) => {
    return (
        <div className="contact-card">
            <div className="img-col">
                <h1>{name}</h1>
                <br />
                <h2>{description}</h2>
                <br />
                <h2>{location}</h2>
                <br />
                <h2>{cost}</h2>
            </div>
            <div className="info-col"></div>
        </div>
    );
};

export default Card;