import './product-info.styles.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { priceFormatter } from '../../utils/custom-hooks/priceFormatter';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { addItem } from '../../redux/cart/cart.actions';

const ProductInfo = ({ item }) => {
  const [value, setValue] = useState(2);
  const dispatch = useDispatch();

  const [cartItem, setCartItem] = useState({
    id: item._id,
    name: item.name,
    price: item.price,
    imageUrl: item.imageUrl[0],
    size: 'S',
    color: item.color[0],
    quantity: 1,
    stock: item.stock,
  });

  //handle color select
  const handleSizeChange = (newSize) => {
    if (newSize !== cartItem.size) {
      setCartItem({ ...cartItem, size: newSize });
    }
  };
  //handle size select
  const handleColorChange = (newColor) => {
    if (newColor !== cartItem.color) {
      setCartItem({ ...cartItem, color: newColor });
    }
  };

  //handle quantity select
  const handleQuantityChange = (newQuantity) => {
    if (
      newQuantity !== cartItem.quantity &&
      newQuantity !== 0 &&
      newQuantity <= item.stock
    ) {
      setCartItem({ ...cartItem, quantity: newQuantity });
    }
  };

  //handle add to cart
  //setup data for cart item by getting local state and props

  return (
    <div className="product-info">
      <div className="product-info__name">{item.name}</div>
      <div className="product-info__price">{priceFormatter(item.price)}</div>
      <div className="product-info__reviews">
        <Box
          component="fieldset"
          mb={3}
          borderColor="transparent"
          className="review-box"
        >
          <Rating
            name="star-review"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="review-box__star-meter"
          />
          <span className="review-box__legend">0 reviews</span>
        </Box>
      </div>
      <div className="product-info__size">
        <div className="legend">Size</div>
        {item.size.length === 0
          ? null
          : item.size.map((size, id) => (
              <button
                key={id}
                className={`${
                  cartItem.size === size ? 'selected' : ''
                } size-button`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
      </div>
      <div className="product-info__color">
        <div className="legend">Color</div>
        {item.color.length === 0
          ? null
          : item.color.map((color, id) => (
              <button
                key={id}
                style={{ backgroundColor: color }}
                className={`${
                  cartItem.color === color ? 'selected' : ''
                } color-button`}
                onClick={() => handleColorChange(color)}
              ></button>
            ))}
      </div>
      <div className="product-info__quantity">
        <div className="legend">Quantity</div>
        <div className="product-count-wrapper">
          <span
            className="icon icon-minus"
            onClick={() => handleQuantityChange(cartItem.quantity - 1)}
          ></span>
          <div className="product-count">{cartItem.quantity}</div>
          <span
            className="icon icon-plus"
            onClick={() => handleQuantityChange(cartItem.quantity + 1)}
          ></span>
        </div>
        <div className="stock">{item.stock} left</div>
      </div>
      <button
        className="product-info__add-to-cart-button"
        onClick={() => dispatch(addItem(cartItem))}
      >
        Add to cart
      </button>
      <div className="product-info__minor-detail">
        Model wearing size S <br />- Chest 36" <br />- Length 25.75"
      </div>
    </div>
  );
};

export default ProductInfo;
