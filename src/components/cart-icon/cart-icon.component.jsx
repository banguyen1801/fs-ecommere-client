import './cart-icon.styles.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();
  const hideCart = useSelector((state) => state.cart.hidden);
  return (
    <div className="cart-wrapper">
      <span
        className="icon icon-shopping-cart"
        onClick={() => dispatch(toggleCartHidden())}
      ></span>
      <span className="cart-wrapper__cart-counter">0</span>
      {hideCart ? null : <CartDropDown />}
    </div>
  );
};

export default CartIcon;
