import React, { useState } from "react";

import Popup from "../Popup/Popup";

import cl from "./Post.module.css";

const Post = ({ post, className }) => {
    const { title, img, img_2x, tags, autor, date, views, text, isVisible } = post;
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handlePopupToggle = () => {
        setIsPopupVisible((prevState) => !prevState);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className={`${cl.post} ${className}`} onClick={handlePopupToggle}>
                <img src={img} srcSet={`${img_2x} 2x`} alt={title} className={cl.post__img} />
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
            {isPopupVisible && <Popup post={post} onClose={handlePopupToggle} />}
        </>
    );
};

export default Post;
