'use strict';

import template from './app.component.html';
import './app.component.scss';

class AppComponent {
  constructor() {}

  $onInit() {
    this.title = 'App component';
  }
}

AppComponent.$inject = [];

export default function component() {
  return {
    controller: AppComponent,
    template,
    controllerAs: '$app',
  };
}
