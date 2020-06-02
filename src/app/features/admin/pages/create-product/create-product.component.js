import { Subscription } from 'rxjs';
import template from './create-product.component.html';
import './create-product.component.scss';

class CreateProductComponent {
  constructor(productService) {
    this.productService = productService;
    this.subscriptions = new Subscription();
    this.existencia = '';
    this.model = '';
    this.description = '';
    this.alto = '';
    this.ancho = '';
    this.largo = '';
    this.peso = '';
    this.tipoMueble = '';
    this.tipoEstilo = '';
    this.tipoMaterial = '';
    this.url = '';
  }

  $onInit() {}

  addProduct() {
    console.log('h');

    const input = document.getElementById('inputFileServer');
    if (input.files && input.files[0]) this.url = input.files[0].name;

    const payload = {
      existencia: this.existencia,
      modelo: this.model,
      descripcion: this.description,
      alto: this.alto,
      ancho: this.ancho,
      largo: this.largo,
      peso: this.peso,
      tipoMueble: this.tipoMueble,
      estilo: this.tipoEstilo,
      material: this.tipoMaterial,
      url: this.url,
    };
    this.subscriptions.add(
      this.productService.createProduct(payload).subscribe()
    );
  }
}

CreateProductComponent.$inject = ['productService'];

export default function component() {
  return {
    controller: CreateProductComponent,
    template,
    controllerAs: '$createProduct',
  };
}
