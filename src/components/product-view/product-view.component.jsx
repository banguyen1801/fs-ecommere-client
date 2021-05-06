import './product-view.styles.scss';
import React from 'react';

import { useSelector } from 'react-redux';

import ProductCard from '../product-card/product-card.component';

const ProductView = () => {
  const productList = useSelector((state) => state.product.products);

  return (
    <div className="product-view">
      {productList.map((productItem) => (
        <ProductCard key={productItem._id} item={productItem} />
      ))}
    </div>
  );
};

export default ProductView;
