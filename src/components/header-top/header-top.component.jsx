import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header-top.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import HeaderInput from '../header-input/header-input.component';
import SignUp from '../sign-up/sign-up.component';
import SignIn from '../sign-in/sign-in.component';
import UserIcon from '../user-icon/user-icon.component';

const HeaderTop = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <div className="header-top">
      <HeaderInput />
      <Link to="/customers">
        <img
          className="header-top__shop-logo"
          src="/images/logo.svg"
          alt="shop-logo"
        />
      </Link>
      <div className="header-top__left">
        {!isAuthenticated ? <SignUp /> : null}
        {!isAuthenticated ? <SignIn /> : null}
        {isAuthenticated ? <UserIcon /> : null}
        {/* <SignUp />
        <SignIn /> */}
        <CartIcon />
      </div>
    </div>
  );
};
export default HeaderTop;
