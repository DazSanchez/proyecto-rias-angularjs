import angular from 'angular';
import createAcountPageComponent from './create-acount.component';
import FooterModule from '../../../../shared/components/footer/footer.module';

export default angular
  .module('CreateAcountPageModule', [FooterModule])
  .component('createAcountPageComponent', createAcountPageComponent()).name;
