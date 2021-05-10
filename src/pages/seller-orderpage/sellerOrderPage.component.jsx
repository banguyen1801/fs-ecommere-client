import React, { useEffect } from 'react';
import './sellerOrderPage.styles.scss';
import { useDispatch, useSelector } from 'react-redux';

import OrderTableSorters from '../../components/order-table-sorters/order-table-sorters.component';
import SellerOrderTable from '../../components/seller-order-table/seller-order-table.component';
import { fetchAllOrdersAsync } from '../../redux/order/order.actions';

const SellerOrderPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrdersAsync());
  }, [dispatch]);

  const ordersArray = useSelector((state) => state.order.ordersInfo);
  console.log(ordersArray);
  const isLoading = useSelector((state) => state.order.isLoading);

  return isLoading ? (
    <span>Loading</span>
  ) : (
    <div className="seller-order-page">
      <div className="seller-order-page__title">Orders</div>
      <OrderTableSorters />
      <SellerOrderTable ordersArray={ordersArray} />
    </div>
  );
};

export default SellerOrderPage;
