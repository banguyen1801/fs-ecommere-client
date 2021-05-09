import './sellerPage.styles.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SellerSidebar from '../../components/seller-sidebar/seller-sidebar.component';
import SellerOrderPage from '../seller-orderpage/sellerOrderPage.component';
import SellerUserPanel from '../../components/seller-userpanel/sellerUserPanel.component';
import SellerProductViewPage from '../seller-productviewpage/sellerProductViewPage.component';

const SellerPage = () => {
  return (
    <div className="sellers-page">
      <SellerSidebar />
      <Switch>
        <Route path="/sellers/orders" component={SellerOrderPage}></Route>
        <Route
          path="/sellers/products"
          component={SellerProductViewPage}
        ></Route>
      </Switch>
      <SellerUserPanel />
    </div>
  );
};

export default SellerPage;
