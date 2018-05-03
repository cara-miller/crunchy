// import {handleErrors} from '../actions/ErrorHandler'
//CONSTANTS

export const DELETE_PRODUCT_BEGIN = 'DELETE_PRODUCT_BEGIN'; 
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

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
//Deleting functionality
//Not Working

export const deleteProduct = (id) => (dispatch) => {
  console.log('got through the function')
  console.log(id)
  console.log('got through dispatch')
    fetch(`/api/v1/products/${id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(handleErrors)
    .then(response => {
      console.log('')
      return response.json()})
      .then(json => {
        dispatch(deleteProductSuccess(json))
      })
      .catch(error => {
        dispatch(deleteProductFailure(error))
        alert("This cannot be deleted")
      })
  } 


// export const deleteProduct = () => (dispatch) => {}

  export function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

//these are dumb blocks of data that don't do anything


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


//REDUCERS
//this is the real state changer!!!!! MVP of state change!!!!!!! 

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
      products: action.products
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

