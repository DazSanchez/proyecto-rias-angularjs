'use strict';

class LoginRouting {
  constructor($routeProvider) {
    $routeProvider.when('/login', {
      template: '<login-page-component></login-page-component>',
    });
  }
}

LoginRouting.$inject = ['$routeProvider'];

export default LoginRouting;
