import { combineEpics } from 'redux-observable';
import { productsEpics$ } from './list.epics';

export const catalogProductsEpics$ = combineEpics(productsEpics$);
