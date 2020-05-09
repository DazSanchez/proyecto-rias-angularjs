'use strict';

class HomeRouting {
  constructor($routeProvider) {
    $routeProvider.when('/home', {
      template: '<home-page-component></home-page-component>',
    });
  }
}

HomeRouting.$inject = ['$routeProvider'];

export default HomeRouting;
