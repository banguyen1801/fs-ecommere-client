import React from 'react';

import './header-top.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import HeaderInput from '../header-input/header-input.component';

const HeaderTop = () => (
  <div className="header-top">
    <HeaderInput />
    <img
      className="header-top__shop-logo"
      src="/images/logo.svg"
      alt="shop-logo"
    />
    <div className="header-top__left">
      <span className="header-top__left__register">Register</span>
      <span className="header-top__left__login">Login</span>
      <CartIcon />
    </div>
  </div>
);
export default HeaderTop;
