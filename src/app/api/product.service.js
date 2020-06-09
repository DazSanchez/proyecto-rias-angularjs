import { from, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import environment from '../../environment/environment';

class ProductService {
  constructor($http) {
    this.http = $http;
    this.url = `${environment.api}`;
  }

  createProduct({ imagen, ...payload }) {
    return this.uploadImage(imagen).pipe(
      switchMap(({ filename }) =>
        from(
          this.http.post(`${this.url}/crear_producto.php`, {
            ...payload,
            imagen: filename,
          })
        )
      ),
      map(({ data }) => data),
      catchError(({ data }) => throwError(data))
    );
  }

  uploadImage(image) {
    const form = new FormData();
    form.set('imagen', image);

    return from(
      this.http.post(`${this.url}/subir_imagen.php`, form, {
        headers: {
          'Content-Type': undefined,
        },
      })
    ).pipe(map(({ data }) => data));
  }

  getProductOptions() {
    return from(this.http.get(`${this.url}/obtener_opciones_mueble.php`)).pipe(
      map(({ data }) => data)
    );
  }
}

ProductService.$inject = ['$http'];

export default ProductService;
