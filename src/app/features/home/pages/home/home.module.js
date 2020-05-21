'use strict';

import angular from 'angular';
import homePageComponent from './home.component';
import catalogProductsModule from '../../components/catalog-products/catalog-products.module';
import HeaderModule from '../../../../shared/components/header/header.module';
import FooterModule from '../../../../shared/components/footer/footer.module';

export default angular
  .module('HomePageModule', [catalogProductsModule, HeaderModule, FooterModule])
  .component('homePageComponent', homePageComponent()).name;
