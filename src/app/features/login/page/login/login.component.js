'use strict';

import template from './login.component.html';
import './login.component.scss';

class LoginComponent {
  constructor(usersService, window) {
    this.usersService = usersService;
    this.w = window;
    this.username = '';
    this.password = '';
    this.error = null;
  }

  $onInit() {}

  login() {
    if (!this.username || !this.password) return;

    this.usersService
      .login({
        username: this.username,
        pwd: this.password,
      })
      .subscribe(
        () => {
          this.w.location.href = '#/home';
        },
        (err) => {
          this.error = err;
          console.log(err);
        }
      );
  }
}

LoginComponent.$inject = ['usersService', '$window'];

export default function component() {
  return {
    controller: LoginComponent,
    template,
    controllerAs: '$loginPage',
  };
}
