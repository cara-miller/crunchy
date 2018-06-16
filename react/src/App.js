import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import ProductsIndexContainer from "./+product-index-page/ProductsIndexContainer";
import ProductShowContainer from "./+product-show-page/ProductShowContainer";
import NavBar from "./NavBar";

const App = props => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
          <IndexRoute component={ProductsIndexContainer} />
          <Route path="/products" component={ProductsIndexContainer} />
          <Route path="/products/:id" component={ProductShowContainer} />
        </Route>
      </Router>
    </div>
  );
};

export default App;
