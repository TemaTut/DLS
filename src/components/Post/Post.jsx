import React from "react";
import cl from "./Post.module.css";

const Post = ({ post }) => {
    return (
        <div key={post.title} className={cl.post}>
            <img src={post.img} alt={post.title} className={cl.post__img} />
            <div className={cl.post__content}>
                <span className={cl.post__tags}>{post.tags}</span>
                <h2 className={cl.post__title}>{post.title}</h2>
                <div className={cl.post__meta}>
                    <span className={cl.post__author}>{post.autor}</span>
                    <span className={cl.post__date}>{post.date}</span>
                    <span className={cl.post__views}>{post.views} Views</span>
                </div>
                <p className={cl.post__description}>{post.text}</p>
            </div>
        </div>
    );
};

export default Post;
