import React, { useState } from "react";

import navItems from "../../constants/navItems";

import cl from "./Burger.module.css";

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cl.navigation}>
            <div className={cl.burgerIcon} onClick={toggleMenu}>
                <span className={isOpen ? cl.burgerLineActive : cl.burgerLine}></span>
                <span className={isOpen ? cl.burgerLineActive : cl.burgerLine}></span>
                <span className={isOpen ? cl.burgerLineActive : cl.burgerLine}></span>
            </div>
            <ul className={`${cl.nav__list} ${isOpen ? cl.open : ""}`}>
                {navItems.map((item) => (
                    <li key={item} className={cl.nav__item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Burger;
