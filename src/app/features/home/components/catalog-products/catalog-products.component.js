'use strict';

import { Subscription } from 'rxjs';
import template from './catalog-products.html';
import './catalog-products.scss';

class CatalogProductsComponent {
  constructor(catalogProductsService) {
    this.catalogProductsService = catalogProductsService;
    this.subscriptions = new Subscription();
    this.filter = '1';
    this.q = '1';
    this.loader = false;
  }

  $onInit() {
    this.showFilter = false;
    this.search();
  }

  toggleFilter() {
    this.showFilter = true;
  }

  filterChanged() {
    this.q = '1';
    this.search();
  }

  search() {
    this.loader = true;
    this.subscriptions.add(
      this.catalogProductsService
        .getCatalogProducts(this.filter, this.q)
        .subscribe((products) => {
          this.loader = false;
          this.products = products;
        })
    );
  }
}

CatalogProductsComponent.$inject = ['catalogProductsService'];

export default function component() {
  return {
    controller: CatalogProductsComponent,
    template,
    controllerAs: '$catalog',
  };
}
