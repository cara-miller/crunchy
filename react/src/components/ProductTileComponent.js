import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductTileComponent = props =>{
  return(
    <div className='row callout secondary'>
      <div className='columns medium-2'>
        <img src={`${props.image}`} width='100' height='100'/>
      </div>
      <div className='columns medium-10'>
        <h5>{props.name}</h5>
      </div>
    </div>
  );
};

export default ProductTileComponent;
