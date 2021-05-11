import './product-list.styles.scss';
import React from 'react';

import ProductListTop from '../product-list-top/product-list-top.component';
import ProductView from '../product-view/product-view.component';
import ProductPagination from '../product-pagination/product-pagination.component';

const ProductList = ({ productsList }) => {
  return (
    <div className="product-list">
      <ProductListTop />
      <ProductView productsList={productsList} />
      <ProductPagination />
    </div>
  );
};

export default ProductList;
