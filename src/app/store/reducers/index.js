import { combineReducers } from 'redux';
import usersReducer from './users';
import productsReducer from './catalog-products';

export const rootReducer = combineReducers({
  users: usersReducer,
  catalogProducts: productsReducer,
});
