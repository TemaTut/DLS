import cl from "./Header.module.css";
import logo from "../../source/img/logo.png";
import Burger from "../Burger/Burger";
import search from "../../source/img/w.png";


const Header = ({ onSearchButtonClick }) => {
    return (
        <div className={ cl.container }>
            <div className={ cl.header }>
                <Burger />
                <img className={ cl.logo } src={ logo } alt="logo" />
                <button onClick={ onSearchButtonClick }>
                    <img src={ search } alt="search" />
                </button>
            </div>
            <div className={ cl.nav }>
                <ul className={ cl.nav__list }>
                    <li className={ cl.nav__item }>Demos</li>
                    <li className={ cl.nav__item }>Post
                        <ul className={ cl.submenu } >
                            <li className={ cl.submenu__item }>Post Header</li>
                            <li className={ cl.submenu__item }>Post Layot</li>
                            <li className={ cl.submenu__item }>Share Buttons</li>
                            <li className={ cl.submenu__item }>Gallery Post</li>
                            <li className={ cl.submenu__item }>Video Post</li>
                        </ul>
                    </li>
                    <li className={ cl.nav__item }>Features</li>
                    <li className={ cl.nav__item }>Categories</li>
                    <li className={ cl.nav__item }>Shop</li>
                    <li className={ cl.nav__item }>Buy Now</li>
                </ul>
            </div>
        </div >
    );
};

export default Header;
