import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Layout from "./components/Layout";
import ProductTile from "./components/ProductTile"
import ProductsIndexContainer from "./containers/ProductsIndexContainer"
import ProductShowContainer from "./containers/ProductShowContainer"

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={ProductsIndexContainer}/>
          <Route path='/products/:id' component={ProductShowContainer}/>
        </Route>
      </Router>
    </div>
  );
};

export default App;
