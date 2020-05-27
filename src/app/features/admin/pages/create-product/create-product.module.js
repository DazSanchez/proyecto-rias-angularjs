import angular from 'angular';
import createProductPageComponent from './create-product.component';
import HeaderModule from '../../../../shared/components/header/header.module';
import FooterModule from '../../../../shared/components/footer/footer.module';

export default angular
  .module('CreateProductPageModule', [HeaderModule, FooterModule])
  .component('createProductPageComponent', createProductPageComponent()).name;
