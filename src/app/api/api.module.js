'use strict';

import angular from 'angular';
import usersService from './users.service';

export default angular
  .module('apiModule', [])
  .factory('usersService', usersService).name;
