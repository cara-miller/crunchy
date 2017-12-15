import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Layout from "./components/Layout";
import ProductTileComponent from "./components/ProductTileComponent"
import ProductsIndexContainer from "./containers/ProductsIndexContainer"

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={ProductsIndexContainer}/>
        </Route>
      </Router>
    </div>
  );
};

export default App;
