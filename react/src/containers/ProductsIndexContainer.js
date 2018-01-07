import React, { Component } from 'react';
import ProductTile from "../components/ProductTile"
import { Route, IndexRoute, Router, browserHistory, Link, Redirect } from 'react-router';
import ProductFormContainer from "./ProductFormContainer"


class ProductsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentUser: {}
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount () {
    this.getProducts();
  }

  getProducts(){
    fetch('/api/v1/products', {
      credentials: 'same-origin'
    })
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
        products: body.products,
        currentUser: body.current_user
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteProduct(id) {
    fetch(`/api/v1/products/${id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if (response.ok) {

      } else {
        alert("This cannot be deleted")
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    this.getProducts();
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
          deleteProduct= {this.deleteProduct}
          getProducts= {this.getProducts}
        />
      )
    })
    return(
      <div>
        <div className="container">
          <div className="row">
        <h1>All Products</h1>
        <ProductFormContainer
          getProducts = {this.getProducts}
          userId = {this.state.currentUser.id}
          currentUser = {this.state.currentUser}
        />
        {products}
        </div>
        </div>
      </div>
    )
  }
}

export default ProductsIndexContainer;
