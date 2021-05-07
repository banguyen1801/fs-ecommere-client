import './cart-dropdown.styles.scss';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Link
        className="cart-link"
        to="/customers/checkout"
        onClick={() => dispatch(toggleCartHidden())}
      >
        View Cart
      </Link>
    </div>
  );
};
export default CartDropDown;
