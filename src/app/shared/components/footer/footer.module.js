import angular from 'angular';
import footerComponent from './footer.component';

export default angular
  .module('FooterModule', [])
  .component('footerComponent', footerComponent()).name;
