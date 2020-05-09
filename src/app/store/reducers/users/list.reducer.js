import { createReducer } from '@reduxjs/toolkit';
import {
  fetchUsers,
  fetchUsersSuccess,
} from '../../actions/users/list.actions';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  result: null,
};

export default createReducer(initialState, {
  [fetchUsers]: (state) => {
    state.loading = true;
    state.loaded = fale;
    state.error = null;
  },
  [fetchUsersSuccess]: (state, { payload }) => {
    state.loading = false;
    state.loaded = true;
    state.result = payload;
  },
});
