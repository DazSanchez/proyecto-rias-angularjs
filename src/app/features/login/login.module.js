'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import loginRouting from './login.routing';
import loginPageModule from './page/login/login.module';

export default angular
  .module('loginModule', [ngRoute, loginPageModule])
  .config(loginRouting).name;
