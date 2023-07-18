import React, { useState, useEffect } from "react";

import Burger from "../Burger/Burger";

import search from "../../source/img/w.png";
import logo from "../../source/img/logo.png";
import logoMobile from "../../source/img/logoMobile.png";
import cl from "./Header.module.css";

const Header = ({ onSearchButtonClick }) => {
    const [logoSrc, setLogoSrc] = useState(logo);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setLogoSrc(logoMobile);
            } else {
                setLogoSrc(logo);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={cl.container}>
            <div className={cl.header}>
                <Burger />
                <div className={cl.logo__wrapper}>
                    <img className={cl.logo} src={logoSrc} alt="logo" />
                </div>
                <button className={cl.btn__search} onClick={onSearchButtonClick}>
                    <img src={search} alt="search" />
                </button>
            </div>
        </div>
    );
};

export default Header;
