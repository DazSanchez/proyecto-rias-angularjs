'use strict';

import { configureStore } from '@reduxjs/toolkit';
import angular from 'angular';
import ngRedux from 'ng-redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { rootReducer } from './reducers';

export default angular.module('StoreModule', [ngRedux]).config([
  '$ngReduxProvider',
  function ($ngReduxProvider) {
    const epicMiddleware = createEpicMiddleware({
      dependencies: {},
    });

    const store = configureStore({
      reducer: rootReducer,
      devTools: true,
      middleware: [epicMiddleware],
    });

    epicMiddleware.run(rootEpic);

    $ngReduxProvider.provideStore(store);
  },
]).name;
