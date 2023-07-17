import React, { useEffect, useState } from "react";
import navItems from "../../constants/navItems";
import subMenuItems from "../../constants/subMenuItems";
import cl from "./Nav.module.css";

const Nav = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsNavVisible(scrollY <= 200);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ul className={`${cl.nav__list} ${isNavVisible ? cl.visible : cl.hidden}`}>
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
    );
};

export default Nav;
