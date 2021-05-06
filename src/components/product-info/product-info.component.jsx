import './product-info.styles.scss';
import React, { useState } from 'react';

import { priceFormatter } from '../../utils/custom-hooks/priceFormatter';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const ProductInfo = ({ item }) => {
  const [value, setValue] = useState(2);

  //handle color select
  const [selectedSize, setSelectedSize] = useState('S');
  const onSizeChange = (newSize) => {
    if (newSize !== selectedSize) {
      setSelectedSize(newSize);
    }
  };
  //handle size select
  const [selectedColor, setSelectedColor] = useState(item.color[0]);
  const onColorChange = (newColor) => {
    if (newColor !== selectedColor) {
      setSelectedColor(newColor);
    }
  };

  //handle quantity select
  const [quantity, setQuantity] = useState(1);
  const onQuantityChange = (newQuantity) => {
    if (newQuantity !== quantity && newQuantity !== -1) {
      setQuantity(newQuantity);
    }
  };

  //handle add to cart

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
            name="simple-controlled"
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
                  selectedSize === size ? 'selected' : ''
                } size-button`}
                onClick={() => onSizeChange(size)}
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
                  selectedColor === color ? 'selected' : ''
                } color-button`}
                onClick={() => onColorChange(color)}
              ></button>
            ))}
      </div>
      <div className="product-info__quantity">
        <div className="legend">Quantity</div>
        <div className="product-count-wrapper">
          <span
            className="icon icon-minus"
            onClick={() => onQuantityChange(quantity - 1)}
          ></span>
          <div className="product-count">{quantity}</div>
          <span
            className="icon icon-plus"
            onClick={() => onQuantityChange(quantity + 1)}
          ></span>
        </div>
        <div className="stock">{item.stock} left</div>
      </div>
      <button className="product-info__add-to-cart-button">Add to cart</button>
      <div className="product-info__minor-detail">
        Model wearing size S <br />- Chest 36" <br />- Length 25.75"
      </div>
    </div>
  );
};

export default ProductInfo;
