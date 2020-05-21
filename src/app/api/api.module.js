'use strict';

import angular from 'angular';
import usersService from './users.service';
import catalogProductsService from './catalog-products.service';

export default angular
  .module('apiModule', [])
  .factory('usersService', usersService)
  .factory('catalogProductsService', catalogProductsService).name;
