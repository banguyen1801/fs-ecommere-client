import './App.styles.scss';
import { Route, withRouter, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import SellerPage from './pages/seller/sellerPage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/customers" component={Homepage}></Route>
        <Route path="/sellers" component={SellerPage}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
