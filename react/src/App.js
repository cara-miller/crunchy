import React from 'react';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import Layout from './components/Layout';
// import ProductTile from './+pages/+product-catalog-page/ProductTile'
import ProductsIndexContainer from './+pages/+product-catalog-page/ProductsIndexContainer'
import ProductShowContainer from './containers/ProductShowContainer'
import NavBar from './NavBar'
import Home from './Home'
import RootReducer from './redux-store/RootReducer'

// for redux devtools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  ));
//applyMiddleware here ^^

const App = props => {
  return(
    <div>
    <Provider store = {store}>
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute component={ProductsIndexContainer}/>
          <Route path='/products' component={ProductsIndexContainer}/>
          <Route path='/products/:id' component={ProductShowContainer}/>
        </Route>
      </Router>
    </Provider>
    </div>
  );
};

export default App;
