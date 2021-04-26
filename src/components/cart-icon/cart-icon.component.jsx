import React from 'react';

import './cart-icon.styles.scss';

const CartIcon = () => (
  <div className="cart-wrapper">
    <span className="icon icon-shopping-cart"></span>
    <span className="cart-wrapper__cart-counter">7</span>
  </div>
);

export default CartIcon;
