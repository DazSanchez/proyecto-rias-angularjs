import angular from 'angular';
import headerComponent from './header.component';

export default angular
  .module('HeaderModule', [])
  .component('headerComponent', headerComponent()).name;
