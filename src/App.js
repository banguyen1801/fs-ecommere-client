import './App.styles.scss';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
