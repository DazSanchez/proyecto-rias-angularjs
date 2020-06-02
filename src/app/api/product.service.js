import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import environment from '../../environment/environment';

class ProductService {
  constructor($http) {
    this.http = $http;
    this.url = `${environment.api}`;
  }

  createProduct(payload) {
    return from(this.http.post(`${this.url}/crear_producto.php`, payload)).pipe(
      map(({ data }) => data)
    );
  }
}

ProductService.$inject = ['$http'];

export default ProductService;
