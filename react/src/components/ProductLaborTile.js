import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductLaborTile = props =>{
  let deleteLabor = () => {
    props.deleteLabor(props.id)
  }

  let deleteButton;
  deleteButton = <button id="add" onClick={deleteLabor}>Delete</button>
  // if (props.currentUser.id === props.userId || props.currentUser.role === "admin") {
  //   deleteButton = <button id="add" onClick={deleteReview}>Delete Review</button>
  // } else {
  //   deleteButton = null
  // }

  return(
    <div>
      <div className="rows" id="tile">
        <div>
          <h5>{props.title}</h5>
          <p>{props.minutesPerJob} minutes to complete at ${props.hourlyWage} per hour</p>
          <p><b>Total Cost: ${(props.costForThisJob).toFixed(2)}</b></p>
        </div>
        {deleteButton}
      </div>
    </div>
  );
};

export default ProductLaborTile;
