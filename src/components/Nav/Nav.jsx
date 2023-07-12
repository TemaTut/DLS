import React from "react";
import cl from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={cl.container}>
            <ul className={cl.nav__list}>
                <li className={cl.nav__item}>Demos</li>
                <li className={cl.nav__item}>Post</li>
                <li className={cl.nav__item}>Features</li>
                <li className={cl.nav__item}>Categories</li>
                <li className={cl.nav__item}>Shop</li>
                <li className={cl.nav__item}>Buy Now</li>
            </ul>
        </div>
    );
};

export default Nav;
