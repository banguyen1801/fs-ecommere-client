import './seller-order-table.styles.scss';
import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SellerPagination from '../seller-pagination/seller-pagination.component';
const dummyOrders = [
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979583980b654fa470d184',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:47.187Z',
    updatedAt: '2021-05-09T07:55:47.187Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979584980b654fa470d185',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:48.508Z',
    updatedAt: '2021-05-09T07:55:48.508Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
  {
    items: [
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
      {
        color: '#ff5f6d',
        id: '609223376cac373908e6a3b2',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        name: 'Zara Party Dress',
        price: 300,
        quantity: 2,
        size: 'S',
        stock: 2,
      },
    ],
    status: 'Pending',
    _id: '60979557980b654fa470d183',
    user_id: '607d63507d9375334c04b3f9',
    createdAt: '2021-05-09T07:55:03.176Z',
    updatedAt: '2021-05-09T07:55:03.176Z',
    __v: 0,
  },
];
const SellerOrderTable = () => {
  return (
    <div className="seller-order-page__table-wrapper">
      <table className="seller-order-page__table">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>ORDERED DATE</th>
            <th>DETAIL</th>
            <th>TOTAL ($)</th>
            <th>
              STATUS <span className="icon icon-chevron-down"></span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map(({ _id, createdAt, status }) => (
            <tr>
              <td className="table-row col-id">{_id}</td>
              <td className="table-row col-create-at">{createdAt}</td>
              <td className="table-row col-detail">First item name...</td>
              <td className="table-row col-total">$1000</td>
              <td className="table-row col-status">
                <button className={`${status} status-button`}>{status}</button>
              </td>
              <td className="table-row col-action">
                <div className="order-status-dropdown">
                  <span>Action</span>
                  <span className="icon icon-chevron-down"></span>
                  <div className="order-status-dropdown__contents">
                    <div>
                      <FiberManualRecordIcon style={{ color: '#82bf11' }} />
                      Mark as Completed
                    </div>
                    <div>
                      <FiberManualRecordIcon style={{ color: '#f05d62' }} />
                      Mark as Canceled
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

export default SellerOrderTable;
