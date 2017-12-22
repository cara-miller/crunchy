import React, { Component } from 'react';
import ProductTile from "../components/ProductTile"
import { Route, IndexRoute, Router, browserHistory, Link, Redirect } from 'react-router';

class ProductsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      supplies: [],
      productsupplies: []
    }
  }

  componentDidMount () {
    fetch('/api/v1/products')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        products: body.products
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render (){
    let products = this.state.products.map(product => {
      return (
        <ProductTile
          key = {product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          retailPrice={product.retail_price}
          profitMargin={product.profit_margin}
        />
      )
    })
    return(
      <div>
        <h1>All Products</h1>
        {products}
      </div>
    )
  }
}

export default ProductsIndexContainer;
