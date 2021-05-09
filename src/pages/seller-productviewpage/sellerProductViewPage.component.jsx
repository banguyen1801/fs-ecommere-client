import './sellerProductViewPage.styles.scss';
import React from 'react';

import ProductTableSorters from '../../components/product-table-sorters/product-table-sorters.component';
import SellerProductViewTable from '../../components/seller-product-view-table/sellerProductViewTable.component';
const SellerProductViewPage = () => {
  return (
    <div className="seller-product-view-page">
      <div className="seller-product-view-page__title">Products</div>
      <ProductTableSorters />
      <SellerProductViewTable />
    </div>
  );
};

export default SellerProductViewPage;
