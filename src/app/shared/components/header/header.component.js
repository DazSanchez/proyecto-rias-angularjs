import template from './header.component.html';
import './header.component.scss';
import { Subscription } from 'rxjs';

class HeaderComponent {
  constructor(usersService) {
    this.usersService = usersService;
    this.subscriptions = new Subscription();
    this.isAuthenticated = false;
  }

  $onInit() {
    this.subscriptions.add(
      this.usersService.getUsers().subscribe((data) => {
        this.userName = data.username;
        this.isAdmin = data.userRole == 'CLIENTE' ? true : false;
        this.isAuthenticated = true;
      })
    );
  }

  logout() {
    localStorage.clear();
    location.href = '/';
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
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
