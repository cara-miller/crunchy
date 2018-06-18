// import {handleErrors} from '../actions/ErrorHandler'
export const FETCH_PRODUCTS_CATALOG_BEGIN   = 'FETCH_PRODUCTS_CATALOG_BEGIN';
export const FETCH_PRODUCTS_CATALOG_SUCCESS = 'FETCH_PRODUCTS_CATALOG_SUCCESS';
export const FETCH_PRODUCTS_CATALOG_FAILURE = 'FETCH_PRODUCTS_CATALOG_FAILURE';

let initialState = {
  loading: false,
  error: false,
  products: [],
  currentUser: {
    "id": 6,
    "first_name": "Cara",
    "last_name": "Miller",
    "username": "blorp",
    "email": "ca.miller92@gmail.com",
    "created_at": "2018-01-04T20:05:33.738Z",
    "updated_at": "2018-01-16T20:54:28.479Z"
  }
}
//you will need to un-hardcode currentUser at some point

//ACTIONS
//Fetching functionality

export const fetchProductsCatalog = () => (dispatch) => {
  dispatch(fetchProductsCatalogBegin());
  fetch('/api/v1/products', {
    credentials: 'same-origin'
  })
  .then(handleErrors)
  .then(response => {
    return response.json()})
  .then(json => {
    console.log(json)
    dispatch(fetchProductsCatalogSuccess(json))})
  .catch(error => {
    dispatch(fetchProductsCatalogFailure(error))
  })
}

export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
//these are dumb blocks of data that don't do anything

export const fetchProductsCatalogBegin = () => ({
  type: FETCH_PRODUCTS_CATALOG_BEGIN
});

export const fetchProductsCatalogSuccess = data => ({
  type: FETCH_PRODUCTS_CATALOG_SUCCESS,
  currentUser: data.current_user,
  products: data.products
})

export const fetchProductsCatalogFailure = () => ({
  type: FETCH_PRODUCTS_CATALOG_FAILURE
})


//REDUCERS
//this is the real state changer!!!!! MVP of state change!!!!!!! 
export function fetchProductsCatalogReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_CATALOG_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    };
    case FETCH_PRODUCTS_CATALOG_SUCCESS:
    return {
      ...state,
      loading: false,
      products: action.products,
      currentUser: action.currentUser,
    };
    case FETCH_PRODUCTS_CATALOG_FAILURE:
    return {
      ...state,
      loading: false,
      error: true
    };
    default:
    return state;
  }
}

//Deleting functionality 
export const DELETE_PRODUCT_BEGIN = 'DELETE_PRODUCT_BEGIN'; 
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export function deleteProduct(id) {
  dispatch(deleteProductBegin());
  fetch(`/api/v1/products/${id}`, {
    credentials: 'same-origin',
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(handleErrors)
  .then(response => {
    if (response.ok) {

          } else {
            alert("This cannot be deleted")
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    if (!response.ok) {
      alert("This cannot be deleted")
    }
  }
// )

//   fetchProductsCatalog();
// }

export function deleteProductReducer (state = initialState, action){
  switch(action.type) {
    case DELETE_PRODUCT_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    };
    case DELETE_PRODUCT_SUCCESS:
    return {
      ...state,
      loading: false,
      products: action.products,
    };
    case DELETE_PRODUCT_FAILURE:
    return {
      ...state,
      loading: false,
      error: true
    };
    default:
    return state;
  }
}

export const deleteProductBegin = () => ({
  type: DELETE_PRODUCT_BEGIN
});

export const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
  currentUser: data.current_user,
  products: data.products
});

export const deleteProductFailure = () => ({
  type: DELETE_PRODUCT_FAILURE
});
