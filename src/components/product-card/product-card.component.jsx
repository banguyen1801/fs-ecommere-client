import './product-card.styles.scss';
import React from 'react';

import { Link } from 'react-router-dom';

const ProductCard = ({ item: { imageUrl, name, price, _id } }) => {
  return (
    <div className="product-card">
      <div
        style={{
          backgroundImage: `url(${imageUrl[0]})`,
        }}
        className="product-image"
      >
        <Link to={`/customers/products/${_id}`} className="quick-shop-link">
          + Quick Shop
        </Link>
      </div>
      <div className="product-name">{name}</div>
      <div className="product-price">${price}</div>
    </div>
  );
};

export default ProductCard;
