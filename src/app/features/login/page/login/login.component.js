'use strict';

import template from './login.component.html';

class LoginComponent {
  constructor() {}

  $onInit() {
    this.title = 'Login page component';
  }
}

LoginComponent.$inject = [];

export default function component() {
  return {
    controller: LoginComponent,
    template,
    controllerAs: '$loginPage',
  };
}
