import React from "react";
import Burger from "../Burger/Burger";

import navItems from "../../constants/navItems";
import subMenuItems from "../../constants/subMenuItems";

import cl from "./Header.module.css";

import search from "../../source/img/w.png";
import logo from "../../source/img/logo.png";

const Header = ({ onSearchButtonClick }) => {
    return (
        <div className={cl.container}>
            <div className={cl.header}>
                <Burger />
                <img className={cl.logo} src={logo} alt="logo" />
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
                                            {item + subItem.text}
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
