'use strict';

import angular from 'angular';
import loginPagecomponent from './login.component';

export default angular
  .module('LoginPageModule', [])
  .component('loginPageComponent', loginPagecomponent()).name;
