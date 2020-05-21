'use strict';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import environment from '../../environment/environment';

class CatalogProductsService {
  constructor($http) {
    this.http = $http;
    this.url = `${environment.api}/photos`;
  }

  getCatalogProducts() {
    return from(this.http.get(this.url)).pipe(map(({ data }) => data));
  }
}

CatalogProductsService.$inject = ['$http'];

export default CatalogProductsService;
