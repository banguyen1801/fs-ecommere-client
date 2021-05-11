import './product-view.styles.scss';
import React from 'react';

import ProductCard from '../product-card/product-card.component';

const ProductView = ({ productsList }) => {
  return (
    <div className="product-view">
      {productsList.map((productItem) => (
        <ProductCard key={productItem._id} item={productItem} />
      ))}
    </div>
  );
};

export default ProductView;
