import React from "react";

import cl from "./Popup.module.css";

const Popup = ({ post, onClose }) => {
    const { title, text } = post;

    return (
        <div className={cl.overlay} onClick={onClose}>
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
