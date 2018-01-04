import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductTile = props =>{

  let deleteProduct = () => {
    props.deleteProduct(props.id)
    props.getProducts();
  }

  let deleteButton;
  deleteButton = <button id= "noborder" onClick={deleteProduct}><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>

  return(
    <div className='row callout secondary' id="producttile">
      <div className='ten columns'>
        <Link to={`/products/${props.id}`}>
        <h5 id="productTile">{props.name}</h5>
        </Link>
      </div>
      <div className = "two columns">
        {deleteButton}
      </div>
    </div>
  );
};
export default ProductTile;
