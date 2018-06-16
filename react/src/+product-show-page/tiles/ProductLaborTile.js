import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductLaborTile = props =>{
  let deleteLabor = () => {
    props.deleteLabor(props.id)
  }

  let deleteButton;
  deleteButton = <button id= "noborder" onClick={deleteLabor}><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>

  return(
    <div>
      <div className="row" id="tile">
        <div>
          <div className="row">
            <h5 className="nine columns">{props.title}</h5>
            <div className="three columns">
              {deleteButton}
            </div>
          </div>

          <p>{props.minutesPerJob} minutes to complete at ${props.hourlyWage} per hour</p>
          <p><b>Total Cost: ${(props.costForThisJob).toFixed(2)}</b></p>
        </div>        
      </div>
    </div>
  );
};

export default ProductLaborTile;
