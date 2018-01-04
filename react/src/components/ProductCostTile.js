import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import ProductEditForm from "../containers/ProductEditForm"

const ProductCostTile = props =>{
  return(
    <div className="container" >
      <div className="row" id="productheader">
        <div className="row">
          <div className="eight columns">
            <h3>{props.name}</h3>
          </div>

          <div className = "three columns" id="editbutton">
            <ProductEditForm
              id = {props.id}
              key = {props.id}
              getProduct = {props.getProduct}
              name = {props.name}
              cost = {props.price}
            />
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="six columns" id="theannoyingdiv">
            <h5 className="row" id={props.pmColor}>Current Profit Margin: {props.profitmargin}%</h5>
            <h5 className="row" >Retail Price: ${props.price}</h5>
          </div>

          <div className="six columns">
              <h5 className="row">Total Cost of Labor: ${props.laborCost.toFixed(2)}</h5>
              <h5 className="row">Total Cost of Supplies: ${props.suppliesCost.toFixed(2)}</h5>
              <h5 className="row">Cost of Production: ${(props.costOfProduction).toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ProductCostTile;
