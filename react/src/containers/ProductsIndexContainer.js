import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory, Link, Redirect } from 'react-router';
import { connect } from "react-redux";

import ProductTile from "../components/ProductTile"
import ProductFormContainer from "./ProductFormContainer"
import { fetchProductsCatalog } from "../redux-store/ducks/ProductCatalog.ducks";


class ProductsIndexContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: [],
    //   currentUser: {}
    // }
    // this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount () {
    this.props.fetchProductsCatalog();
  }

  // getProducts(){
  //   fetch('/api/v1/products', {
  //     credentials: 'same-origin'
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     this.setState({
  //       products: body.products,
  //       currentUser: body.current_user
  //     })
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  // }

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

  render () {
    const{ error, loading, products, currentUser }= this.props;
     if (error) {
       return <div> Maybe I'm wrong about this Error!</div>;
     }
     if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map(product =>
          <li key={product.id}>{product.name}</li>
        )}
      </ul>
    )
  }
}
//     let products = this.state.products.map(product => {
//       return (
//         <ProductTile
//           key = {product.id}
//           id={product.id}
//           name={product.name}
//           image={product.image}
//           retailPrice={product.retail_price}
//           profitMargin={product.profit_margin}
//           deleteProduct= {this.deleteProduct}
//           getProducts= {this.getProducts}
//         />
//       )
//     })
//     return(
//       <div>
//         <div className="container">
//           <div className="row">
//         <h1>All Products</h1>
//         <ProductFormContainer
//           getProducts = {this.getProducts}
//           userId = {this.state.currentUser.id}
//           currentUser = {this.state.currentUser}
//         />
//         {products}
//         </div>
//         </div>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state) => ({
  products: state.fetchProductsCatalogReducer.products,
  loading: state.fetchProductsCatalogReducer.loading,
  error: state.fetchProductsCatalogReducer.error,
  currentUser: state.fetchProductsCatalogReducer.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductsCatalog: () => dispatch(fetchProductsCatalog())
})

//may need to pass userid in at some point

export default connect(mapStateToProps, mapDispatchToProps) (ProductsIndexContainer);
