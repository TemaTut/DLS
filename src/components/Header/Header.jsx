import React, { useState, useEffect } from "react";
import Burger from "../Burger/Burger";
import navItems from "../../constants/navItems";
import subMenuItems from "../../constants/subMenuItems";
import cl from "./Header.module.css";
import search from "../../source/img/w.png";
import logo from "../../source/img/logo.png";
import logoMobile from "../../source/img/logoMobile.png";

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
            <div className={cl.nav}>
                <ul className={cl.nav__list}>
                    {navItems.map((item) => (
                        <li key={item} className={cl.nav__item}>
                            {item}
                            {item && (
                                <ul className={cl.submenu}>
                                    {subMenuItems.map((subItem) => (
                                        <li key={subItem.id} className={cl.submenu__item}>
                                            {subItem.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
