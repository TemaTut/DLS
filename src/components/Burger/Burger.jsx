// Burger.js
import React, { useState } from "react";

import subMenuItems from "../../constants/subMenuItems";
import navItems from "../../constants/navItems";
import logoMobile from "../../source/img/logoMobile.png";
import cl from "./Burger.module.css";

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cl.navigation}>
            <div className={`${cl.burgerIcon} ${isOpen ? cl.burgerIconActive : ""}`} onClick={toggleMenu}>
                <span className={`${cl.burgerLine} ${isOpen ? cl.burgerLineActive : ""}`}></span>
                <span className={`${cl.burgerLine} ${isOpen ? cl.burgerLineActive : ""}`}></span>
                <span className={`${cl.burgerLine} ${isOpen ? cl.burgerLineActive : ""}`}></span>
            </div>

            <ul className={`${cl.nav__list} ${isOpen ? cl.open : ""}`}>
                <div className={cl.logo__wrapper}>
                    <img className={`${cl.logo} ${isOpen ? cl.logoActive : ""}`} src={logoMobile} alt="logo" />
                </div>
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
    );
};

export default Burger;
