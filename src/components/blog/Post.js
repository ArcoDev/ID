import React from "react";
import "./post.scss";

const Post = () => {
    return (
        <div className="card">
            <div className="img"></div>
            <div className="title">El titulo va aqui</div>
            <div className="bottom">
                <div className="tags"></div>
                <div className="icons"></div>
            </div>
        </div>
    );
};

export default Post;
