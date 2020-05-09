'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import apiModule from './api/api.module';
import appComponent from './app.component';
import './app.component.scss';
import appRouting from './app.routing';
import homeModule from './features/home/home.module';
import loginModule from './features/login/login.module';

angular
  .module('app', [ngRoute, homeModule, loginModule, apiModule])
  .config(appRouting)
  .component('appComponent', appComponent());
