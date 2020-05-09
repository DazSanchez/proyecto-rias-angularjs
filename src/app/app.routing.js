'use strict';

class AppRouting {
  constructor($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/home');

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(false);
  }
}

AppRouting.$inject = ['$routeProvider', '$locationProvider'];

export default AppRouting;
