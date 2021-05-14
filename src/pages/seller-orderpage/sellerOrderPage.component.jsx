import React, { useEffect } from 'react';
import './sellerOrderPage.styles.scss';
import { useDispatch, useSelector } from 'react-redux';

import OrderTableSorters from '../../components/order-table-sorters/order-table-sorters.component';
import SellerOrderTable from '../../components/seller-order-table/seller-order-table.component';
import {
  fetchAllOrdersAsync,
  setCurrentPage,
} from '../../redux/order/order.actions';

const SellerOrderPage = () => {
  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };
  const orderStore = useSelector((state) => state.order);
  const { ordersInfo, isLoading, maxPage, currentPage } = orderStore;

  useEffect(() => {
    dispatch(fetchAllOrdersAsync(currentPage));
  }, [dispatch, currentPage]);
  if (ordersInfo === undefined)
    return <span>Maybe you are not allowed here.</span>;
  return (
    <div className="seller-order-page">
      <div className="seller-order-page__title">Orders</div>
      <OrderTableSorters />
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <SellerOrderTable
          ordersArray={ordersInfo}
          currentPage={currentPage}
          maxPage={maxPage}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default SellerOrderPage;
