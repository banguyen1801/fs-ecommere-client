import './sellerPage.styles.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SellerSidebar from '../../components/seller-sidebar/seller-sidebar.component';
import SellerOrderPage from '../seller-orderpage/sellerOrderPage.component';
import SellerUserPanel from '../seller-userpanel/sellerUserPanel.component';

const SellerPage = () => {
  return (
    <div className="sellers-page">
      <SellerSidebar />
      <Switch>
        <Route path="/sellers" render={() => <SellerOrderPage />}></Route>
      </Switch>
      <SellerUserPanel />
    </div>
  );
};

export default SellerPage;
