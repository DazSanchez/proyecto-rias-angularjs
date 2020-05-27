'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import adminRouting from './admin.routing';
import createProductPageModule from './pages/create-product/create-product.module';

export default angular
  .module('adminModule', [ngRoute, createProductPageModule])
  .config(adminRouting).name;
