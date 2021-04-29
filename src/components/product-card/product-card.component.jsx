import './product-card.styles.scss';
import React from 'react';

const ProductCard = ({
  imageUrl,
  productName = 'product name',
  price = 'price',
}) => {
  return (
    <div className="product-card">
      <div className="product-image">product image</div>
      <div className="product-name">{productName}</div>
      <div className="product-price">${price}</div>
    </div>
  );
};

export default ProductCard;
