'use strict';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import environment from '../../environment/environment';

class UsersService {
  constructor($http) {
    this.http = $http;
    this.url = `${environment.api}/users`;
  }

  getUsers() {
    return from(this.http.get(this.url)).pipe(map(({ data }) => data));
  }
}

UsersService.$inject = ['$http'];

export default UsersService;
