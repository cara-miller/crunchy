import ProductsIndexContainer from "./+product-index-page/ProductsIndexContainer";
import ProductShowContainer from "./+product-show-page/ProductShowContainer";
import NavBar from "./NavBar";
import Home from "./Home";

import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./redux-store/RootReducer";

// for redux devtools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
//applyMiddleware here ^^

const App = props => {
  return (
    <div>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={NavBar}>
            <IndexRoute component={ProductsIndexContainer} />
            <Route path="/products" component={ProductsIndexContainer} />
            <Route path="/products/:id" component={ProductShowContainer} />
          </Route>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
