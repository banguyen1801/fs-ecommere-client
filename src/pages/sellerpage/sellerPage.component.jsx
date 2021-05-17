import './sellerPage.styles.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import SellerSidebar from '../../components/seller-sidebar/seller-sidebar.component';
import SellerOrderPage from '../seller-orderpage/sellerOrderPage.component';
import SellerUserPanel from '../../components/seller-userpanel/sellerUserPanel.component';
import SellerProductViewPage from '../seller-productviewpage/sellerProductViewPage.component';
import SellerProductCreatePage from '../seller-product-create-page/sellerProductCreatePage.component';
const SellerPage = () => {
  const userRole = useSelector((state) => state.user.user.roles);
  const isAdmin = userRole.includes('admin');
  console.log('sellerPage', isAdmin);
  return isAdmin ? (
    <div className="sellers-page">
      <SellerSidebar />
      <Switch>
        <Route path="/sellers/orders" component={SellerOrderPage}></Route>
        <Route
          path="/sellers/products"
          component={SellerProductViewPage}
        ></Route>
        <Route
          path="/sellers/addProducts"
          component={SellerProductCreatePage}
        ></Route>
      </Switch>
      <SellerUserPanel />
    </div>
  ) : (
    <Redirect to="/customers" />
  );
};

export default SellerPage;
