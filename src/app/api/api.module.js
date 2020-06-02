'use strict';

import angular from 'angular';
import usersService from './users.service';
import catalogProductsService from './catalog-products.service';
import productService from './product.service';

export default angular
  .module('apiModule', [])
  .factory('usersService', usersService)
  .factory('catalogProductsService', catalogProductsService)
  .factory('productService', productService).name;
