import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductSupplyTile = props =>{

  let deleteSupply = () => {
    props.deleteSupply(props.id)
  }

  let deleteButton;
  deleteButton = <button id="add" onClick={deleteSupply}>Delete</button>

  return(
    <div className="rows" id="tile">
      <div>
        <h5>{props.name}</h5>
        <p>Requires {props.quantity} {props.unit} at ${(props.costPerPiece).toFixed(2)} per piece</p>
        <p><b>Total Cost: ${(props.supplyCost).toFixed(2)}</b></p>
      </div>
      {deleteButton}
    </div>
  );
};

export default ProductSupplyTile;
