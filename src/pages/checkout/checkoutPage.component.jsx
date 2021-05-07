import './checkoutPage.styles.scss';
import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../../components/cart-item/cart-item.component';
import CartCheckout from '../../components/cart-checkout/cart-checkout.component';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const cartTotal = cart.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  return (
    <div className="checkout-page">
      <div className="checkout-legend">
        <span>My Bag</span>
      </div>
      <div className="cart-panel">
        <div className="cart-preview">
          <div className="cart-preview__header">
            <div className="product">Product</div>
            <div className="color">Color</div>
            <div className="size">Size</div>
            <div className="quantity">Quantity</div>
            <div className="amount">Amount</div>
          </div>
          <div className="cart-preview__items">
            {cart.length === 0 ? (
              <span>Your cart is empty.</span>
            ) : (
              cart.map((cartItem, id) => <CartItem key={id} item={cartItem} />)
            )}
          </div>
        </div>
        <CartCheckout total={cartTotal} cart={cart} />
      </div>
    </div>
  );
};

export default CheckoutPage;
