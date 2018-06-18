export function handleErrors(response) {
  debugger
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// // import * as types from './actionTypes';

// // export const fetchProductsBegin = () => ({
//     //     type: FETCH_PRODUCTS_BEGIN
//     // });
    
//     const reducers = combineReducers({
//         products: productReducer
//     })
    
    
//     const productReducer = (state={}, action) => {
//         switch(action.type){
//             case "FETCH_PRODUCTS": {
//                 return {...state, products: action.payload};
//                 break;
//             }
//             case "DELETE_PRODUCT_SUCCESS": {
//                 return {...state, products: action.payload};
//                 break;
//             }
//         }
//         return state;
//     }
    
    
    
    
//     //Action

//     export function fetchProducts(){
//         return dispatch => {
//             store.dispatch({type: "FETCH_PRODUCTS"});
//         }
//         return fetch('/api/v1/products', {
//           credentials: 'same-origin'
//         })
//         .then(response => {
//           if (!response.ok) {
//             let errorMessage = `${response.status} (${response.statusText})`,
//             error = new Error(errorMessage);
//             throw(error);
//           }
//         })
//         .then(response => response.json())
//         .then(body => {
//           this.setState({
//             products: body.products,
//             currentUser: body.current_user
//           })
//         })
//         .catch(error => console.error(`Error in fetch: ${error.message}`));
//     }
    
//     //Type Action
    
//     export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
    

//     //Reducer



//     //Store

//     //Middleware?