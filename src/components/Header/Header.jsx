import React from "react";
import cl from "./Header.module.css";
import logo from "../../source/img/logo.png";
import search from "../../source/img/w.png";

const Header = () => {
    return (
        <div className={cl.container}>
            <div className={cl.header}>
                <img className={cl.logo} src={logo} alt="logo" />
                <img className={cl.search} src={search} alt="search" />
            </div>
        </div>
    );
};

export default Header;
