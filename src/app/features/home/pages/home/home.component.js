'use strict';

import { Subscription } from 'rxjs';
import template from './home.component.html';

class HomeComponent {
  constructor(usersService) {
    this.usersService = usersService;
    this.subscriptions = new Subscription();
  }

  $onInit() {
    this.subscriptions.add(
      this.usersService.getUsers().subscribe((users) => {
        this.users = users;
      })
    );
  }
}

HomeComponent.$inject = ['usersService'];

export default function component() {
  return {
    controller: HomeComponent,
    template,
    controllerAs: '$homePage',
  };
}
