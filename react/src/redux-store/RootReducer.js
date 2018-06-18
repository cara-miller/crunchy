import { combineReducers } from 'redux';
import {fetchProductsCatalogReducer, deleteProductReducer } from './ducks/ProductCatalog.ducks'

export default combineReducers({
  fetchProductsCatalogReducer,
  deleteProductReducer
})