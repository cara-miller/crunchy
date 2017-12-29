import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductSupplyTile = props =>{
  return(
    <div className="rows">
      <div id="post-module" className="small-15 medium-5 columns">
        <h5>{props.name}</h5>
        <p>Requires {props.quantity} {props.unit} at ${props.costPerPiece} per piece</p>
        <p><b>Total Cost: ${props.supplyCost}</b></p>
      </div>
    </div>
  );
};

export default ProductSupplyTile;
