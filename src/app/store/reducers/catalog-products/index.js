import { combineReducers } from 'redux';
import productsReducer from './catalog-products.reducer';

export default combineReducers({
  products: productsReducer,
});
