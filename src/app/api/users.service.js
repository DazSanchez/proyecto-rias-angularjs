'use strict';

import { from, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import environment from '../../environment/environment';

class UsersService {
  constructor($http) {
    this.http = $http;
    this.url = `${environment.api}`;
  }

  login(credentials) {
    return from(
      this.http.post(`${this.url}/iniciar_sesion.php`, credentials)
    ).pipe(
      map(({ data }) => data),
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      }),
      catchError((err) => {
        return throwError(err.data);
      })
    );
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user && JSON.parse(user);
  }
}

UsersService.$inject = ['$http'];

export default UsersService;
