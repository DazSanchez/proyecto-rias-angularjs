'use strict';

class AdminRouting {
  constructor($routeProvider) {
    $routeProvider.when('/admin/create-product', {
      template:
        '<create-product-page-component></create-page-product-component>',
    });
  }
}

AdminRouting.$inject = ['$routeProvider'];

export default AdminRouting;
