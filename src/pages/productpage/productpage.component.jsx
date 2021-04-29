import './productpage.styles.scss';
import React from 'react';

import ProductList from '../../components/product-list/product-list.component';
import SideBar from '../../components/sidebar/sidebar.component';
import BreadCrump from '../../components/bread-crump/bread-crump.component';
const ProductPage = () => {
  return (
    <div>
      <BreadCrump />
      <div className="product-page">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;
