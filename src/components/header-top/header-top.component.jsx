import React from 'react';

import './header-top.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import HeaderInput from '../header-input/header-input.component';
import SignUp from '../sign-up/sign-up.component';
import SignIn from '../sign-in/sign-in.component';

const HeaderTop = () => (
  <div className="header-top">
    <HeaderInput />
    <img
      className="header-top__shop-logo"
      src="/images/logo.svg"
      alt="shop-logo"
    />
    <div className="header-top__left">
      <SignUp />
      <SignIn />
      <CartIcon />
    </div>
  </div>
);
export default HeaderTop;
