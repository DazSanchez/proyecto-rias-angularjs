import angular from 'angular';
import catalogProductsComponent from './catalog-products.component';

export default angular
  .module('CatalogProductsModule', [])
  .component('catalogProductsComponent', catalogProductsComponent()).name;
