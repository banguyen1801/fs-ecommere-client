import './cart-dropdown.styles.scss';
import React from 'react';

import { Link } from 'react-router-dom';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Link className="cart-link" to="/products">
        View Cart
      </Link>
    </div>
  );
};
export default CartDropDown;
