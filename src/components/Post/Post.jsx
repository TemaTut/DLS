import React from "react";
import cl from "./Post.module.css";

const Post = ({ post, className }) => {
    const { title, img, tags, autor, date, views, text, isVisible } = post;

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`${cl.post} ${className}`}>
            <img src={img} alt={title} className={cl.post__img} />
            <div className={cl.post__content}>
                <span className={cl.post__tags}>{tags}</span>
                <h2 className={cl.post__title}>{title}</h2>
                <div className={cl.post__meta}>
                    <span className={cl.post__author}>{autor}</span>
                    <span className={cl.post__date}>{date}</span>
                    <span className={cl.post__views}>{views} Views</span>
                </div>
                <p className={cl.post__description}>{text}</p>
            </div>
        </div>
    );
};

export default Post;
