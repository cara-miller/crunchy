import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, Link, Redirect } from 'react-router';
import { connect } from "react-redux";

import ProductTile from "./ProductTile"
// import ProductFormContainer from "./ProductFormContainer"
import { fetchProductsCatalog} from "../../redux-store/ducks/ProductCatalogFetch.ducks";
import { deleteProductReducer} from "../../redux-store/ducks/ProductCatalogDelete.ducks";


class ProductsIndexContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchProductsCatalog();
  }

  // deleteProduct(id) {
  //   fetch(`/api/v1/products/${id}`, {
  //     credentials: 'same-origin',
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' }
  //   }).then(response => {
  //     if (response.ok) {

  //     } else {
  //       alert("This cannot be deleted")
  //     }
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  //   this.getProducts();
  // }

  // deleteProductTile() {
  //   console.log("reached ")
  //   this.props.deleteProduct(id);
  // }

  render () {
    
    const{ error, loading, products, currentUser, deleteProduct}= this.props;
     if (error) {
       return <div> Maybe I'm wrong about this Error!</div>;
     }
     if (loading) {
      return <div>Loading...</div>;
    }

   let productTiles = products.map(product => {
      return(
      <ProductTile
        key= {product.id}
        id={product.id}
        name ={product.name}
        image={product.image}
        retailPrice={product.retail_price}
        profitMargin={product.profit_margin}
        deleteProduct= {deleteProduct}
      />
      )
    })

    return (
      <div>
        {productTiles}
      </div> 
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.fetchProductsCatalogReducer.products,
  loading: state.fetchProductsCatalogReducer.loading,
  error: state.fetchProductsCatalogReducer.error,
  currentUser: state.fetchProductsCatalogReducer.currentUser,
  deleteProduct: state.deleteProductReducer.id
});
//not sure about how mapping state to props works for deleting

const mapDispatchToProps = (dispatch) => ({
  fetchProductsCatalog: () => dispatch(fetchProductsCatalog()),
  deleteProduct: () => dispatch(deleteProduct())

})

//may need to pass userid in at some point

export default connect(mapStateToProps, mapDispatchToProps) (ProductsIndexContainer);
