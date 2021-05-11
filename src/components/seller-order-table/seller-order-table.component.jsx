import './seller-order-table.styles.scss';
import React from 'react';
import { useDispatch } from 'react-redux';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SellerPagination from '../seller-pagination/seller-pagination.component';
import { updateOrderStatusAsync } from '../../redux/order/order.actions';

const SellerOrderTable = ({ ordersArray, ...tableProps }) => {
  const dispatch = useDispatch();
  const orderTotalCalculator = (itemsArray) => {
    return itemsArray.reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0);
  };

  const handleCompletedOrder = (id, currentStatus) => {
    if (currentStatus === 'Pending') {
      dispatch(updateOrderStatusAsync(id, 'Completed'));
    }
  };
  const handleCanceledOrder = (id, currentStatus) => {
    if (currentStatus === 'Pending') {
      dispatch(updateOrderStatusAsync(id, 'Canceled'));
    }
  };

  return (
    <div className="seller-order-page__table-wrapper">
      <table className="seller-order-page__table">
        <thead>
          <tr>
            <th className="first-column">ORDER ID</th>
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
          {ordersArray.map(({ _id, createdAt, status, items }, index) => (
            <tr className="seller-order-page__table-data-row" key={_id}>
              <td className="first-column table-row col-id">{_id}</td>
              <td className="table-row col-create-at">{createdAt}</td>
              <td className="table-row col-detail">
                {items[0].name}[{items[0].size}] X {items[0].quantity}
              </td>
              <td className="table-row col-total">
                ${orderTotalCalculator(items)}
              </td>
              <td className="table-row col-status">
                <button className={`${status} status-button`}>{status}</button>
              </td>
              <td className="table-row col-action">
                <div className="order-status-dropdown">
                  <span>Action</span>
                  <span className="icon icon-chevron-down"></span>
                  <div className="order-status-dropdown__contents">
                    <div onClick={() => handleCompletedOrder(_id, status)}>
                      <FiberManualRecordIcon style={{ color: '#82bf11' }} />
                      Mark as Completed
                    </div>
                    <div onClick={() => handleCanceledOrder(_id, status)}>
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
      <SellerPagination {...tableProps} />
    </div>
  );
};

export default SellerOrderTable;
