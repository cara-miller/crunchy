import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductTile = props =>{
  return(
    <div className='row callout secondary'>
      <div className='columns medium-2'>
        <img src={`${props.image}`} width='100' height='100'/>
      </div>
      <div className='columns medium-10'>
        <Link to={`/products/${props.id}`}>
        <h5 id="productTile">{props.name}</h5>
        </Link>
      </div>
    </div>
  );
};
export default ProductTile;
