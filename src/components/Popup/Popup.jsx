import React from "react";

import cl from "./Popup.module.css";

const Popup = ({ post, onClose }) => {
    const { title, text } = post;

    const handleCloseClick = () => {
        onClose();
    };

    return (
        <div className={cl.overlay} onClick={handleCloseClick}>
            <div className={cl.popup} onClick={(e) => e.stopPropagation()}>
                <button className={cl.closeBtn} onClick={onClose}>
                    Закрыть
                </button>
                <h2 className={cl.popup__title}>{title}</h2>
                <p className={cl.popup__description}>{text}</p>
            </div>
        </div>
    );
};

export default Popup;
