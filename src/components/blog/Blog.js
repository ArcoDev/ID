import React from "react";
import "./blog.scss";
import Post from "./Post";

const Blog = () => {
    const expand = (search) => {
        search.classList.toggle("focus");
    };
    return (
        <div className="blog-container">
            <div className="blog-nav">
                <div className="left-side">
                    <div
                        className="search-box"
                        onFocus={() => {
                            const search = document.querySelector(
                                ".search-box"
                            );
                            expand(search);
                        }}
                        onBlur={() => {
                            const search = document.querySelector(
                                ".search-box"
                            );
                            expand(search);
                        }}
                    >
                        <div className="search-icon">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.0283 16.8056C14.2193 16.8056 16.8061 14.2188 16.8061 11.0278C16.8061 7.8368 14.2193 5.25 11.0283 5.25C7.83729 5.25 5.25049 7.8368 5.25049 11.0278C5.25049 14.2188 7.83729 16.8056 11.0283 16.8056Z"
                                    stroke="#2A2FAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18.2503 18.2501L15.1086 15.1084"
                                    stroke="#2A2FAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="search-input">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Buscar"
                            />
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="rounded-div">
                        <div className="text">Ordenar</div>
                        <div className="order-icon">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="rounded-div">
                        <div className="text">Filtrar</div>
                        <div className="filter-icon">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="posts-container">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Blog;
