import './sellerProductViewPage.styles.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductTableSorters from '../../components/product-table-sorters/product-table-sorters.component';
import SellerProductViewTable from '../../components/seller-product-view-table/sellerProductViewTable.component';

import {
  sellerFetchProductAsync,
  sellerSetCurrentPage,
} from '../../redux/product/product.actions';

const SellerProductViewPage = () => {
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.product);
  const {
    sellerCurrentPage,
    sellerTableProducts,
    sellerMaxPage,
    sellerIsLoading,
  } = productStore;

  const handlePageChange = (newPage) => {
    dispatch(sellerSetCurrentPage(newPage));
  };

  useEffect(() => {
    dispatch(sellerFetchProductAsync(sellerCurrentPage, 10));
  }, [dispatch, sellerCurrentPage]);

  return (
    <div className="seller-product-view-page">
      <div className="seller-product-view-page__title">Products</div>
      <ProductTableSorters />
      {sellerIsLoading ? (
        <span>Seller Page is Loading</span>
      ) : (
        <SellerProductViewTable
          sellerTableProducts={sellerTableProducts}
          maxPage={sellerMaxPage}
          handlePageChange={handlePageChange}
          currentPage={sellerCurrentPage}
        />
      )}
    </div>
  );
};

export default SellerProductViewPage;
