import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductSupplyTile = props =>{
  return(
    <div className="rows">
      <div id="post-module" className="small-12 medium-4 columns">
        <h5>{props.name}</h5>
        <p><b>Quantity used in product:</b> {props.quantity}</p>
        <p><b>Total Cost of this supply: </b> ${props.cost}</p>
      </div>
    </div>
  );
};

export default ProductSupplyTile;
