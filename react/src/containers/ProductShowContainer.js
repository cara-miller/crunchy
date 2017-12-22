import React, { Component } from 'react';
import ProductTile from "../components/ProductTile";
import ProductSupplyTile from "../components/ProductSupplyTile"
import { Route, IndexRoute, Link, Router, browserHistory } from 'react-router';

class ProductShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      supplies: [],
      productSupplies: []
    };
    this.getProduct = this.getProduct.bind(this);
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
       product: body.product,
       supplies: body.supplies,
       productSupplies: body.productSupplies
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getProduct();
  }

  render () {
    const{product, supplies, productSupplies} = this.state
    let supplyTiles
    supplyTiles = supplies.map((supply, i) => {
      return(
        <ProductSupplyTile
          key={supply.id}
          id={supply.id}
          name={supply.name}
          cost={productSupplies[i].cost/100}
          quantity={productSupplies[i].quantity}
        />
      )
    })

    return(
      <div>
        <h2><b>{product.name}</b></h2>
        <p><h5>{`Retail Price: $${product.retail_price/100}`}</h5></p>
        <h3>Supplies:</h3>
          {supplyTiles}
        <h3>Labor:</h3>
      </div>
    )
  }
}

export default ProductShowContainer;
