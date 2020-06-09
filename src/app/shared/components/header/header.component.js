import template from './header.component.html';
import './header.component.scss';

class HeaderComponent {
  constructor(usersService, window) {
    this.w = window;
    this.usersService = usersService;
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.user = null;
  }

  $onInit() {
    const user = this.usersService.getCurrentUser();

    if (user) {
      this.user = user;
      this.isAuthenticated = true;
      this.isAdmin = user.userRole === 'ADMIN';
    }
  }

  logout() {
    localStorage.clear();
    this.w.location.href = '/';
  }
}

HeaderComponent.$inject = ['usersService', '$window'];

export default function component() {
  return {
    controller: HeaderComponent,
    template,
    controllerAs: '$headerComponent',
    selector: 'header-component',
  };
}
