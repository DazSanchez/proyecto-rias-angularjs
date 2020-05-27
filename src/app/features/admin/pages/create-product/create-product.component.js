import { Subscription } from 'rxjs';
import template from './create-product.component.html';
import './create-product.component.scss';

class CreateProductComponent {
  constructor() {}

  $onInit() {}
}

CreateProductComponent.$inject = [];

export default function component() {
  return {
    controller: CreateProductComponent,
    template,
    controllerAs: '$createProduct',
  };
}
