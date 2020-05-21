class UserRouting {
  constructor($routeProvider) {
    $routeProvider.when('/create-acount', {
      template: '<create-acount-page-component></create-acount-page-component>',
    });
  }
}

UserRouting.$inject = ['$routeProvider'];

export default UserRouting;
