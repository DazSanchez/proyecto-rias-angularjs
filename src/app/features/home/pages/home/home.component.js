'use strict';

import template from './home.component.html';

class HomeComponent {
  constructor() {}

  $onInit() {}
}

HomeComponent.$inject = [];

export default function component() {
  return {
    controller: HomeComponent,
    template,
    controllerAs: 'home',
  };
}