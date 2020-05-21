import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchProductsSuccess,
} from '../../actions/catalog-products/catalog-products.actions';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  result: null,
};

export default createReducer(initialState, {
  [fetchProducts]: (state) => {
    state.loading = true;
    state.loaded = fale;
    state.error = null;
  },
  [fetchProductsSuccess]: (state, { payload }) => {
    state.loading = false;
    state.loaded = true;
    state.result = payload;
  },
});
