import './product-list.styles.scss';
import React from 'react';

import TopPagination from '../product-top-pagination/product-top-pagination.component';
import ProductView from '../product-view/product-view.component';

const ProductList = () => {
  return (
    <div className="product-list">
      <TopPagination />
      <ProductView />
      <div className="bot-pagination">
        <div className="pagination">
          <span className="icon icon-navigate_before"></span>
          <span className="page-number">1/1</span>
          <span className="icon icon-navigate_next"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
