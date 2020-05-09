'use strict';

import angular from 'angular';
import homePageComponent from './home.component';

export default angular
  .module('HomePageModule', [])
  .component('homePageComponent', homePageComponent()).name;
