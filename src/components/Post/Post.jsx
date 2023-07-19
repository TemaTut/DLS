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
                        <div className={cl.post_dot}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7" />
                            </svg>
                        </div>
                        <span className={cl.post__date}>{date}</span>
                        <div className={cl.post_dot}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7" />
                            </svg>
                        </div>
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
