import { createAction } from '@reduxjs/toolkit';
import { withPayload } from '../../utils';

export const fetchProducts = createAction('[Products] Fetch');

export const fetchProductsSuccess = createAction(
  '[Products] Fetch Success',
  withPayload()
);

export const fetchProductsError = createAction(
  '[Products] Fetch Error',
  withPayload()
);
