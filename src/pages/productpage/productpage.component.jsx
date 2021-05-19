import './productpage.styles.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductList from '../../components/product-list/product-list.component';
import SideBar from '../../components/sidebar/sidebar.component';
import BreadCrump from '../../components/bread-crump/bread-crump.component';
import { fetchInitialProductAsync } from '../../redux/product/product.actions';

const ProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialProductAsync());
  }, [dispatch]);

  const productStore = useSelector((state) => state.product);
  const { isLoading, products } = productStore;

  if (!products) return <span>Please Login to search for product</span>;
  return isLoading ? (
    <span>Loading</span>
  ) : (
    <div>
      <BreadCrump />
      <div className="product-page">
        <SideBar />
        <ProductList productsList={products} />
      </div>
    </div>
  );
};

export default ProductPage;
