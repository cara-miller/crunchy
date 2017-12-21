import React from 'react';
import { browserHistory, Link } from 'react-router';

const SupplyTile = props =>{
  return(
    <div className="rows">
      <div id="post-module" className="small-12 medium-4 columns">
        <h4>{props.name}</h4>
        <p><b>Supplier:</b> {props.supplier}</p>
        <p><b>Cost:</b> ${props.cost}</p>
        <p><b>Sold in Quantity:</b> {props.quantity} {props.unit}</p>
        <p><b>Product Code:</b> {props.productCode}</p>
      </div>
    </div>
  );
};

export default SupplyTile;
