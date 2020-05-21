'use strict';

import { Subscription } from 'rxjs';
import template from './catalog-products.html';
import './catalog-products.scss';

class CatalogProductsComponent {
  constructor(catalogProductsService) {
    this.catalogProductsService = catalogProductsService;
    this.subscriptions = new Subscription();
  }

  $onInit() {
    this.showFilter = false;
    this.loader = true;
    this.subscriptions.add(
      this.catalogProductsService.getCatalogProducts().subscribe((products) => {
        this.loader = false;
        this.products = products;
        console.log(this.products);
      })
    );
  }

  onFilter() {
    this.showFilter = true;
    console.log(this.showFilter);
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
