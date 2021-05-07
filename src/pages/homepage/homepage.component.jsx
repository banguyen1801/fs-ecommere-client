import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

// import Homepage from '../../pages/homepage/homepage.component';
import ProductPage from '../../pages/productpage/productpage.component';
import ProductDetailPage from '../../pages/productdetailpage/productDetailPage.component';
import CheckoutPage from '../../pages/checkout/checkoutPage.component';

const Homepage = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/customers" component={Directory}></Route>
        <Route exact path="/customers/products" component={ProductPage}></Route>
        <Route
          exact
          path="/customers/products/:id"
          component={ProductDetailPage}
        ></Route>
        <Route
          exact
          path="/customers/checkout"
          component={CheckoutPage}
        ></Route>
      </Switch>
      <Footer />
    </>
  );
  // return <Directory />;
};

export default Homepage;
