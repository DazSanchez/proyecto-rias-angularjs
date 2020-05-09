'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import homeRouting from './home.routing';
import homePageModule from './pages/home/home.module';

export default angular
  .module('homeModule', [ngRoute, homePageModule])
  .config(homeRouting).name;
