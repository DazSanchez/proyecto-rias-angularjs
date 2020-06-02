'use strict';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import environment from '../../environment/environment';

class CatalogProductsService {
  constructor($http) {
    this.http = $http;
    this.url = `${environment.api}`;
  }

  getCatalogProducts(filter, q) {
    const params = {
      filter: filter,
      q: q,
    };
    return from(
      this.http.get(
        `${this.url}/catalogo_productos.php?filter=${params.filter}&q=${params.q}`
      )
    ).pipe(map(({ data }) => data));
  }
}

CatalogProductsService.$inject = ['$http'];

export default CatalogProductsService;
