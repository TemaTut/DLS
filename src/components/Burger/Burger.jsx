import React, { useState } from 'react';
import cl from './Burger.module.css'

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={ cl.navigation }>
      <div className={ cl.burgerIcon } onClick={ toggleMenu }>
        <span className={ isOpen ? cl.burgerLineActive : cl.burgerLine }></span>
        <span className={ isOpen ? cl.burgerLineActive : cl.burgerLine }></span>
        <span className={ isOpen ? cl.burgerLineActive : cl.burgerLine }></span>
      </div>

      <ul className={ `${cl.nav__list} ${isOpen ? cl.open : ''}` }>
        <li className={ cl.nav__item }>Demos</li>
        <li className={ cl.nav__item }>Post</li>
        <li className={ cl.nav__item }>Features</li>
        <li className={ cl.nav__item }>Categories</li>
        <li className={ cl.nav__item }>Shop</li>
        <li className={ cl.nav__item }>Buy Now</li>
      </ul>

    </div>
  );
}

export default Burger;