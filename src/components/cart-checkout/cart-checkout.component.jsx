import './cart-checkout.styles.scss';
import React from 'react';
import { priceFormatter } from '../../utils/custom-hooks/priceFormatter';

const CartCheckout = ({ total }) => {
  return (
    <div className="cart-checkout">
      <div className="cart-checkout__header">Total</div>
      <div className="cart-checkout-detail">
        <div className="price-detail">
          <div className="detail">
            <span>Shipping & handling: </span>
            <span>Free</span>
          </div>
          <div className="detail">
            <span>Total product: </span>
            <span>{priceFormatter(total)}</span>
          </div>
          <div className="detail total">
            <span>Subtotal</span>
            <span>{priceFormatter(total)}</span>
          </div>
        </div>
        <button className="checkout-button">Check Out</button>
      </div>
    </div>
  );
};

export default CartCheckout;
