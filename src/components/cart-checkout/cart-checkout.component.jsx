import './cart-checkout.styles.scss';
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { priceFormatter } from '../../utils/custom-hooks/priceFormatter';

import { clearCart } from '../../redux/cart/cart.actions';

const CartCheckout = ({ total, cart }) => {
  const userId = useSelector((state) => state.user.user._id);
  const dispatch = useDispatch();

  const handleCreateOrder = async ({ cart, id }) => {
    if (!cart || cart.length === 0) return;
    try {
      const newOrder = await axios.post('http://localhost:5000/api/orders', {
        params: {
          user_id: id,
          items: cart,
        },
      });
      dispatch(clearCart());
    } catch (err) {
      throw new Error(err.message);
    }
  };

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
            <span>${priceFormatter(total)}</span>
          </div>
          <div className="detail total">
            <span>Subtotal</span>
            <span>${priceFormatter(total)}</span>
          </div>
        </div>
        <button
          className="checkout-button"
          onClick={() => handleCreateOrder({ id: userId, cart })}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
