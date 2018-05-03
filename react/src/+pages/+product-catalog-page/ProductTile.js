import React from 'react';
import { browserHistory, Link } from 'react-router';
import { deleteProduct } from "../../redux-store/ducks/ProductCatalogDelete.ducks";

const ProductTile = props =>{


  let deleteProductTile = () => {
    deleteProduct()
  // props.getProducts();
  }
  
  let deleteButton;
  deleteButton = <button id= "noborder" onClick={deleteProductTile}><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>Delete</button>
  
  return(
    <div className='row callout secondary' id="producttile">
      <div className='twelve columns'>
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
