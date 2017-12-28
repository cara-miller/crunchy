import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductSupplyTile = props =>{
  return(
    <div className="rows">
      <div id="post-module" className="small-15 medium-5 columns">
        <h5>{props.name}</h5>
        <p>Quantity used in product: {props.quantity}</p>
        <p>Cost Per Piece:  ${props.costPerPiece}</p>
        <p>Total cost of this supply for this product: ${props.supplyCost}</p>
      </div>
    </div>
  );
};

export default ProductSupplyTile;
