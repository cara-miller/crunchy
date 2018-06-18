import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductSupplyTile = props =>{

  let deleteSupply = () => {
    props.deleteSupply(props.id)
  }

  let deleteButton;
  deleteButton = <button id= "noborder" onClick={deleteSupply}><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>

  return(
    <div className="row" id="tile">
      <div>
        <div className="row">
          <h5 className="nine columns">{props.name}</h5>
            <div className="three columns">
              {deleteButton}
            </div>
          </div>

        <p>Requires {props.quantity} {props.unit} at ${(props.costPerPiece).toFixed(2)} per piece</p>
        <p><b>Total Cost: ${(props.supplyCost).toFixed(2)}</b></p>
      </div>
    </div>
  );
};

export default ProductSupplyTile;
