'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import userRouting from './user.routing';
import createAcountPageModule from './page/create-acount/create-acount.module';

export default angular
  .module('userModule', [ngRoute, createAcountPageModule])
  .config(userRouting).name;
