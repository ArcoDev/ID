import React, { useContext } from "react";
import "./video.scss";
import { LangContext } from "../../context/LangProvider";
const Video = () => {
    const { fileTexts } = useContext(LangContext);
    return (
        <div className="video-section">
            <div className="video-container">
                <iframe
                    title="Video"
                    width="1030"
                    height="580"
                    src="https://www.youtube.com/embed/U_ZfpZGyGTg?controls=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="video-text-container">
                <div className="video-title">{fileTexts.video.title}</div>
                <div className="video-subTitle">{fileTexts.video.text}</div>
            </div>
        </div>
    );
};

export default Video;
