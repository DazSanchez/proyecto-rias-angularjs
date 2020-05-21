'use strict';

import template from './footer.component.html';
import './footer.component.scss';

class FooterComponent {
  constructor() {}

  $onInit() {}
}

FooterComponent.$inject = [];

export default function component() {
  return {
    controller: FooterComponent,
    template,
    controllerAs: '$homePage',
    select: 'footer-component',
  };
}
