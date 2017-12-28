import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductLaborTile = props =>{
  return(
    <div className="rows">
      <div id="post-module" className="small-12 medium-5 columns">
        <p>{props.title}</p>
        <p>{props.minutesPerJob} minutes to complete at ${props.hourlyWage} per hour</p>
        <p>Total Cost: ${(props.costForThisJob).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductLaborTile;
