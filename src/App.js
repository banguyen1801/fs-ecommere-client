import './App.styles.scss';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import SellerPage from './pages/sellerpage/sellerPage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" render={() => }></Route> */}
        <Route path="/customers" component={Homepage}></Route>
        <Redirect exact from="/" to="/customers" />
        <Route path="/sellers" component={SellerPage}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
