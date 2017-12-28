import React, { Component } from 'react';
import ProductTile from "../components/ProductTile";
import ProductSupplyTile from "../components/ProductSupplyTile"
import ProductLaborTile from "../components/ProductLaborTile"
import AddSupplyToProduct from "../components/AddSupplyToProduct"
import SupplyFormContainer from "./SupplyFormContainer"
import { Route, IndexRoute, Link, Router, browserHistory } from 'react-router';

class ProductShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      supplies: [],
      productSupplies: [],
      labors: [],
      productLabors: [],
      laborCost: null
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
       productSupplies: body.productSupplies,
       labors: body.labors,
       productLabors: body.productLabors
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getProduct();
  }


  render () {
    const{product, supplies, productSupplies, labors, productLabors} = this.state;
    let supplyTiles;
    let laborTiles;
    let laborCost;
    let supplyCost;
    supplyTiles = supplies.map((supply, i) => {
      supplyCost = ((productSupplies[i].quantity)*(productSupplies[i].productsupplycost/100))
      return(
        <ProductSupplyTile
          key={supply.id}
          id={supply.id}
          name={supply.name}
          costPerPiece={productSupplies[i].productsupplycost/100}
          quantity={productSupplies[i].quantity}
          supplyCost={supplyCost}
        />
      )
    });
      laborTiles = labors.map((labor, i) => {
        laborCost = ((labor.cost_per_hour/100)/60) * (productLabors[i].time_per_job)
        return(
          <ProductLaborTile
            key={labor.id}
            id={labor.id}
            title={labor.description}
            hourlyWage={labor.cost_per_hour/100}
            minutesPerJob={productLabors[i].time_per_job}
            costForThisJob={laborCost}
          />
        )
      });
    return(
      <div>
        <h2><b>{product.name}</b></h2>
        <h5>{`Retail Price: $${product.retail_price/100}`}</h5>
        <div className="row">
          <div className="column">
            <h3>Supplies:</h3>
              <AddSupplyToProduct
                product_id={product.id}
                supplies={supplies}
              />
            {supplyTiles}
          </div>
          <div className="column">
            <h3>Labor:</h3>
            <button id='add' className="button">Add Labor</button>
            {laborTiles}
          </div>
        </div>

      </div>
    )
  }
}

export default ProductShowContainer;
