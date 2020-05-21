'use strict';

import angular from 'angular';
import loginPagecomponent from './login.component';
import FooterModule from '../../../../shared/components/footer/footer.module';

export default angular
  .module('LoginPageModule', [FooterModule])
  .component('loginPageComponent', loginPagecomponent()).name;
