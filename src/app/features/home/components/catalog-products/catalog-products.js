'use strict';

import { Subscription, BehaviorSubject } from 'rxjs';
import template from './catalog-products.html';
import './catalog-products.scss';

class CatalogProductsComponent {
  constructor() {
    this.subscriptions = new Subscription();
  }

  $onInit() {
    this.showFilter = false;
  }

  onFilter() {
    this.showFilter = true;
    console.log(this.showFilter);
  }
}

// CatalogProductsComponent.$inject = [''];

export default function component() {
  return {
    controller: CatalogProductsComponent,
    template,
    controllerAs: '$catalog',
  };
}
