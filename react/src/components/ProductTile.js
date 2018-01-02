import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductTile = props =>{
  return(
    <div className='row callout secondary' id="producttile">
      <div className='columns medium-10'>
        <Link to={`/products/${props.id}`}>
        <h5 id="productTile">{props.name}</h5>
        </Link>
      </div>
    </div>
  );
};
export default ProductTile;
