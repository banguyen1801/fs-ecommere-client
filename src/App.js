import './App.styles.scss';
import { Route, withRouter, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import Homepage from './pages/homepage/homepage.component';
import ProductPage from './pages/productpage/productpage.component';
import ProductDetailPage from './pages/productdetailpage/productDetailPage.component';
import CheckoutPage from './pages/checkout/checkoutPage.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/products" component={ProductPage}></Route>
        <Route exact path="/products/:id" component={ProductDetailPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
