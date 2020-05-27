'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import apiModule from './api/api.module';
import appComponent from './app.component';
import './app.component.scss';
import appRouting from './app.routing';
import homeModule from './features/home/home.module';
import loginModule from './features/login/login.module';
import userModule from './features/user/user.module';
import adminModule from './features/admin/admin.module';

angular
  .module('app', [
    ngRoute,
    homeModule,
    loginModule,
    apiModule,
    userModule,
    adminModule,
  ])
  .config(appRouting)
  .component('appComponent', appComponent());
