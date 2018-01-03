import React from 'react';
import { browserHistory, Link } from 'react-router';



const ProductCostTile = props =>{
  return(
    <div className="container" >
      <div className="row" id="productheader">
          <div className="eight columns">
            <h3>{props.name}</h3>
            <div className="row">
              <h5 className="eight columns" id={props.pmColor}>Current Profit Margin: {props.profitmargin}%</h5>
              <div className = "four columns"></div>
            </div>
            <h5>Retail Price: ${props.price}</h5>
          </div>
          <div className="four columns"><p>Total Cost of Labor: ${props.laborCost.toFixed(2)}</p>
            <p>Total Cost of Supplies: ${props.suppliesCost.toFixed(2)}</p>
            <p>Cost of Production: ${(props.costOfProduction).toFixed(2)}</p>
          </div>
      </div>
    </div>
  );
};

export default ProductCostTile;
