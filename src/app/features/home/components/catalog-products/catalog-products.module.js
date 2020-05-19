import angular from 'angular';
import catalogProductsComponent from './catalog-products';

export default angular
  .module('CatalogProductsModule', [])
  .component('catalogProductsComponent', catalogProductsComponent()).name;
