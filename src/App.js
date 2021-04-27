import './App.styles.scss';
import { Route, withRouter, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage.component';
import SignUp from './components/sign-up/sign-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
