import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Layout from './components/Layout';
import ProductTile from './components/ProductTile'
import ProductsIndexContainer from './containers/ProductsIndexContainer'
import ProductShowContainer from './containers/ProductShowContainer'
import SupplyShowContainer from './containers/SupplyShowContainer'
import NavBar from './NavBar'
import Home from './Home'

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute component={Home}/>
          <Route path='/products' component={ProductsIndexContainer}/>
          <Route path='/products/:id' component={ProductShowContainer}/>
          <Route path='/supplies/:id' component={SupplyShowContainer}/>
        </Route>
      </Router>
    </div>
  );
};

export default App;
