import './product-view.styles.scss';
import React from 'react';

import { useSelector } from 'react-redux';

import ProductCard from '../product-card/product-card.component';

// const dummyProductCards = [
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
//   {
//     productName: 'Long Product Name',
//     price: 99.99,
//     maxPage: 2,
//   },
// ];

const ProductView = () => {
  const products = useSelector((state) => state.product.product);

  return (
    <div className="product-view">
      {products.map((p, id) => (
        <ProductCard key={id} productName={p.name} price={p.price} />
      ))}
    </div>
  );
};

export default ProductView;
