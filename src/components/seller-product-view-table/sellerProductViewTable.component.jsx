import './sellerProductViewTable.styles.scss';
import React from 'react';
import SellerPagination from '../seller-pagination/seller-pagination.component';

import { priceFormatter } from '../../utils/custom-hooks/priceFormatter';

const dummyProducts = [
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'MaxiMidiDresses'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a392',
    name: 'Hermosa Ladder Lace Maxi Dress',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 45,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.337Z',
    updatedAt: '2021-05-05T04:46:47.337Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'RompersJumpsuits'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a39f',
    name: 'Moonstruck Surplice Romper',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 49,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.342Z',
    updatedAt: '2021-05-05T04:46:47.342Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'PartyOccasionDresses'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a3b2',
    name: 'Zara Party Dress',
    brand: 'Zara',
    price: 300,
    stock: 2,
    popularity: 40,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.347Z',
    updatedAt: '2021-05-05T04:46:47.347Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'RompersJumpsuits'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a3a1',
    name: 'Moonstruck Surplice Romper',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 49,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.342Z',
    updatedAt: '2021-05-05T04:46:47.342Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'GoingOutDresses'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a3a5',
    name: 'Catalina Printed Halter Dress',
    brand: 'Zara',
    price: 100,
    stock: 2,
    popularity: 50,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.343Z',
    updatedAt: '2021-05-05T04:46:47.343Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'MaxiMidiDresses'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a39a',
    name: 'Button-Down Denim Maxi Dress',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 45,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.339Z',
    updatedAt: '2021-05-05T04:46:47.339Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'MaxiMidiDresses'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a397',
    name: 'Hermosa Ladder Lace Maxi Dress',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 45,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.338Z',
    updatedAt: '2021-05-05T04:46:47.338Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'RompersJumpsuits'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a3a2',
    name: 'Hattie High-Neck Linen Jumpsuit',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 49,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.342Z',
    updatedAt: '2021-05-05T04:46:47.342Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'RompersJumpsuits'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a3a3',
    name: 'Moonstruck Surplice Romper',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 49,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.342Z',
    updatedAt: '2021-05-05T04:46:47.342Z',
  },
  {
    size: ['S', 'M', 'L'],
    color: ['#ff5f6d', '#ffc371', '#5f6dff', '#ffa15f', '#3d3d3f', '#ededed'],
    categories: ['Clothes', 'ladies', 'Dress', 'RompersJumpsuits'],
    imageUrl: [
      'https://i.ibb.co/GCCdy8t/womens.png',
      'https://i.ibb.co/GCCdy8t/womens.png',
    ],
    _id: '609223376cac373908e6a3a3',
    name: 'Moonstruck Surplice Romper',
    brand: 'Zara',
    price: 69,
    stock: 2,
    popularity: 49,
    __v: 0,
    createdAt: '2021-05-05T04:46:47.342Z',
    updatedAt: '2021-05-05T04:46:47.342Z',
  },
];

const SellerProductViewTable = () => {
  return (
    <div className="seller-product-view-page__table-wrapper">
      <table className="seller-product-view-page__table">
        <thead>
          <tr>
            <th className="first-column">PRODUCT</th>
            <th>SOLD</th>
            <th>DATE ADDED</th>
            <th>PROFIT ($)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map(({ name, createdAt, stock, _id }) => (
            <tr key={Math.random()}>
              <td className="first-column table-row col-name">{name}</td>
              <td className="table-row col-sold">1/{stock}</td>
              <td className="table-row col-create-at">{createdAt}</td>
              <td className="table-row col-profit">{priceFormatter(600)}</td>
              <td className="table-row col-action">
                <div className="order-status-dropdown">
                  <span>Action</span>
                  <span className="icon icon-chevron-down"></span>
                  <div className="order-status-dropdown__contents">
                    <div>
                      <span className="icon icon-create"></span>
                      Edit
                    </div>
                    <div>
                      <span className="icon icon-bin2"></span>
                      Delete
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SellerPagination />
    </div>
  );
};

export default SellerProductViewTable;
