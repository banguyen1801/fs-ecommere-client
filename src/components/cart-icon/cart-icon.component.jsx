import './cart-icon.styles.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();
  const hideCart = useSelector((state) => state.cart.hidden);
  const cart = useSelector((state) => state.cart.cartItems);
  const totalCartItemCount = cart.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return (
    <div className="cart-wrapper">
      <span
        className="icon icon-shopping-cart"
        onClick={() => dispatch(toggleCartHidden())}
      ></span>
      <span className="cart-wrapper__cart-counter">{totalCartItemCount}</span>
      {hideCart ? null : <CartDropDown />}
    </div>
  );
};

export default CartIcon;
