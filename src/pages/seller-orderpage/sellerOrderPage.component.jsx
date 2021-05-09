import React from 'react';
import './sellerOrderPage.styles.scss';

import OrderTableSorters from '../../components/order-table-sorters/order-table-sorters.component';
import SellerOrderTable from '../../components/seller-order-table/seller-order-table.component';

const SellerOrderPage = () => {
  return (
    <div className="seller-order-page">
      <div className="seller-order-page__title">Orders</div>
      <OrderTableSorters />
      <SellerOrderTable />
    </div>
  );
};

export default SellerOrderPage;
