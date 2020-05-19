'use strict';

import { Subscription, BehaviorSubject } from 'rxjs';
import template from './catalog-products.html';
import './catalog-products.scss';

class CatalogProductsComponent {
  constructor() {
    this.subscriptions = new Subscription();
  }

  $onInit() {
    this.showFilter$ = true;
    this.onFilter = function () {
      console.log('false');
    };
  }
}

// CatalogProductsComponent.$inject = [''];

export default function component() {
  return {
    comtroller: CatalogProductsComponent,
    selector: 'catalog-products-component',
    template,
    controllerAs: '$cat',
  };
}
