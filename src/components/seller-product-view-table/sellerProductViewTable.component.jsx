import './sellerProductViewTable.styles.scss';
import React from 'react';
import SellerPagination from '../seller-pagination/seller-pagination.component';

import { priceFormatter } from '../../utils/custom-hooks/priceFormatter';

const SellerProductViewTable = ({ productsInfo, ...productTableProps }) => {
  console.log(productTableProps);
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
          {productsInfo.map(({ name, createdAt, stock, _id, price }) => (
            <tr key={_id}>
              <td className="first-column table-row col-name">{name}</td>
              <td className="table-row col-sold">0/{stock}</td>
              <td className="table-row col-create-at">{createdAt}</td>
              <td className="table-row col-profit">
                {priceFormatter(price * Math.random())}
              </td>
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
      <SellerPagination {...productTableProps} />
    </div>
  );
};

export default SellerProductViewTable;
