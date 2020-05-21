import { combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from '../../actions/catalog-products/catalog-products.actions';

const fetchProductsEpic$ = (action$) =>
  action$.pipe(
    filter(fetchProducts.match),
    switchMap(() =>
      catalogProductsService.getCatalogProducts().pipe(
        map((payload) => fetchProductsSuccess({ payload })),
        catchError((payload) => of(fetchProductsError({ payload })))
      )
    )
  );

export const catalogProductsEpics$ = combineEpics(fetchProductsEpic$);
