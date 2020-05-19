'use strict';

import angular from 'angular';
import homePageComponent from './home.component';
import catalogProductsModule from '../../components/catalog-products/catalog-products.module';

export default angular
  .module('HomePageModule', [catalogProductsModule])
  .component('homePageComponent', homePageComponent()).name;
