import React, { Component } from 'react';
import ProductTile from "../components/ProductTile";
import { Route, IndexRoute, Link, Router, browserHistory } from 'react-router';

class ProductShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  getProduct() {
  let productId = this.props.params.id
  fetch(`/api/v1/products/${productId}`)
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       product: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getProduct()
  }

  render () {
    return(
      <div>
        <h3 id="showtitle">{this.state.product.name}</h3>
        <p>{`Retail Price: $${this.state.product.retail_price}`}</p>
        <p>Supplies:</p> <p>Labor:</p>
      </div>
    );
  }

}

export default ProductShowContainer;
