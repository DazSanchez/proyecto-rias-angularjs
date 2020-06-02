import template from './header.component.html';
import './header.component.scss';
import { Subscription } from 'rxjs';

class HeaderComponent {
  constructor(usersService) {
    this.usersService = usersService;
    this.subscriptions = new Subscription();
    this.userName = 'Hugo Sanchez';
    this.isAdmin = true;
    this.isAuthenticated = true;
  }

  $onInit() {
    this.subscriptions.add(
      this.usersService.getUsers().subscribe((users) => {
        this.users = users;
      })
    );
  }
}

HeaderComponent.$inject = ['usersService'];

export default function component() {
  return {
    controller: HeaderComponent,
    template,
    controllerAs: '$headerComponent',
    selector: 'header-component',
  };
}
