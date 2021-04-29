import './product-view.styles.scss';

import ProductCard from '../product-card/product-card.component';

import React from 'react';
const dummyProductCards = [
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
  {
    productName: 'Long Product Name',
    price: 99.99,
    maxPage: 2,
  },
];
const ProductView = () => {
  return (
    <div className="product-view">
      {dummyProductCards.map((product) => (
        <ProductCard productName={product.productName} price={product.price} />
      ))}
    </div>
  );
};

export default ProductView;
