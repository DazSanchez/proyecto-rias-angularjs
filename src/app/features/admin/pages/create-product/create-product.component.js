import { Subscription } from 'rxjs';
import template from './create-product.component.html';
import './create-product.component.scss';

class CreateProductComponent {
  constructor(productService) {
    this.productService = productService;
    this.subscriptions = new Subscription();
    this.product = {
      cantidad: null,
      modelo: null,
      precio: null,
      descripcion: null,
      tipo: null,
      estilo: null,
      material: null,
      cantidad: null,
      imagen: null,
      alto: null,
      ancho: null,
      largo: null,
      peso: null,
      imagen: null,
    };

    this.catalogs = {
      tipos: [],
      estilos: [],
      materiales: [],
    };

    this.hasImage = false;
    this.error = null;
    this.success = false;
  }

  $onInit() {
    this.productService.getProductOptions().subscribe((catalogs) => {
      this.catalogs = catalogs;
    });
    this.fileInput = document.getElementById('inputFile');
  }

  loadImage() {
    const file = this.fileInput.files[0];
    this.hasImage = !!file;

    if (file) {
      this.product.imagen = file;
    }
  }

  addProduct() {
    this.success = false;
    this.error = null;

    this.productService.createProduct(this.product).subscribe(
      () => {
        this.success = true;
        this.product = {
          cantidad: null,
          modelo: null,
          precio: null,
          descripcion: null,
          tipo: null,
          estilo: null,
          material: null,
          cantidad: null,
          imagen: null,
          alto: null,
          ancho: null,
          largo: null,
          peso: null,
          imagen: null,
        };
        this.hasImage = false;
      },
      (err) => {
        console.log({ err });
        this.error = err;
      }
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
