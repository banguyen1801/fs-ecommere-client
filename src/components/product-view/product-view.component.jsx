import './product-view.styles.scss';
import React from 'react';

import { useSelector } from 'react-redux';

import ProductCard from '../product-card/product-card.component';

const ProductView = () => {
  const products = useSelector((state) => state.product.product);

  return (
    <div className="product-view">
      {products.map((p, id) => (
        <ProductCard
          key={id}
          productName={p.name}
          price={p.price}
          imageUrl={p.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductView;
