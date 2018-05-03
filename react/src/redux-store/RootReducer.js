import { combineReducers } from 'redux';
import {fetchProductsCatalogReducer } from './ducks/ProductCatalogFetch.ducks'
import { deleteProductReducer} from './ducks/ProductCatalogDelete.ducks';


export default combineReducers({
  fetchProductsCatalogReducer,
  deleteProductReducer
})