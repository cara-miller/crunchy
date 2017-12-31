import React, { Component } from 'react';
import ProductTile from "../components/ProductTile";
import ProductSupplyTile from "../components/ProductSupplyTile"
import ProductLaborTile from "../components/ProductLaborTile"
import AddSupplyToProduct from "../components/AddSupplyToProduct"
import SupplyFormContainer from "./SupplyFormContainer"
import AddLaborToProduct from "../components/AddLaborToProduct"
import ProductCostTile from "../components/ProductCostTile"
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

  //functions for laborTiles and supplyTiles

  deleteLabor(id) {
    fetch(`/api/v1/productlabors/${id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert("Labor removed from product")
      } else {
        alert("This cannot be deleted")
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    this.getProduct();
  }

  deleteSupply(id) {
    fetch(`/api/v1/productsupplies/${id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert("Labor removed from product")
      } else {
        alert("This cannot be deleted")
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    this.getProduct();
  }

  //render

  render () {
    const{product, supplies, productSupplies, labors, productLabors} = this.state;
    let supplyTiles;
    let laborTiles;
    let laborCost;
    let supplyCost;
    let supplyobj;
    let costPerPiece;
    let laborobj;
    let totalsuppliesCost = 0;
    let totallaborCost = 0;

    supplyTiles = productSupplies.map((productsupply) => {
      supplies.forEach((supply) => {
        if (supply.id == productsupply.supply_id) {
          supplyobj = supply
          costPerPiece = (supply.cost/100)/supply.sold_in_quantity
          supplyCost = costPerPiece * productsupply.quantity
          totalsuppliesCost += supplyCost
        }
      })
      return(
        <ProductSupplyTile
          key={productsupply.id}
          id={productsupply.id}
          name={supplyobj.name}
          costPerPiece={costPerPiece}
          quantity={productsupply.quantity}
          supplyCost={supplyCost}
          unit={supplyobj.unit_of_measurement}
          deleteSupply = {this.deleteSupply}
          getProduct = {this.getProduct}
        />
      )
    });
      laborTiles = productLabors.map((productlabor) => {
        labors.forEach((labor) => {
          if (labor.id == productlabor.labor_id) {
            laborobj = labor
            laborCost = ((laborobj.cost_per_hour/100)/60)*productlabor.time_per_job
            totallaborCost += laborCost
          }
        })
        return(
          <ProductLaborTile
            key={productlabor.id}
            id={productlabor.id}
            title={laborobj.description}
            hourlyWage={laborobj.cost_per_hour/100}
            minutesPerJob={productlabor.time_per_job}
            costForThisJob={laborCost}
            deleteLabor = {this.deleteLabor}
            getProduct = {this.getProduct}
          />
        )
      });
    return(
      <div>
        <ProductCostTile
          key = {product.id}
          id = {product.id}
          price = {product.retail_price/100}
          suppliesCost = {totalsuppliesCost}
          laborCost = {totallaborCost}
          costOfProduction = {totalsuppliesCost + totallaborCost}
          name = {product.name}
        />
          <div className="container">
            <div className="row">
              <div className="six columns">
                <h3>Supplies:</h3>
                  <AddSupplyToProduct
                    product_id={product.id}
                    supplies={supplies}
                    getProduct={this.getProduct}
                  />
                {supplyTiles}
              </div>
              <div className="six columns">
                <h3>Production:</h3>
                <AddLaborToProduct
                  product_id={product.id}
                  labors={labors}
                  getProduct={this.getProduct}
                />
                {laborTiles}
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ProductShowContainer;
