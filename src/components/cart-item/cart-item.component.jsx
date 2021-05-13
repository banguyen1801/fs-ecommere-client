import './cart-item.styles.scss';
import React from 'react';
import { useDispatch } from 'react-redux';

import { priceFormatter } from '../../utils/custom-hooks/priceFormatter';
import { urlFormatter } from '../../utils/misc/formatters';

import { removeItem, addOneItem } from '../../redux/cart/cart.actions';

const CartItem = ({
  item,
  item: { imageUrl, name, price, quantity, color, size },
}) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div
        style={{ backgroundImage: `url(${urlFormatter(imageUrl)})` }}
        className="image"
      ></div>
      <div className="name-modify">
        <div className="name">{name}</div>
        <div className="modify">
          <button className="change">Change</button>
          <button className="remove">Remove</button>
        </div>
      </div>
      <div className="color">
        <button
          style={{ backgroundColor: `${color}` }}
          className="color-button"
        ></button>
      </div>
      <div className="size">
        <span>{size}</span>
      </div>
      <div className="quantity">
        <div className="quantity-wrapper">
          <span
            className="icon icon-minus"
            onClick={() => dispatch(removeItem(item))}
          ></span>
          <div className="product-count">{quantity}</div>
          <span
            className="icon icon-plus"
            onClick={() => dispatch(addOneItem(item))}
          ></span>
        </div>
      </div>
      <div className="amount">${priceFormatter(price)}</div>
    </div>
  );
};

export default CartItem;
