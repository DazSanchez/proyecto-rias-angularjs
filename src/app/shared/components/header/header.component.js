import template from './header.component.html';
import './header.component.scss';

class HeaderComponent {
  constructor() {
    this.userName = 'Hugo Sanchez';
    this.isAdmin = true;
    this.isAuthenticated = true;
  }

  $onInit() {}
}

HeaderComponent.$inject = [];

export default function component() {
  return {
    controller: HeaderComponent,
    template,
    controllerAs: '$headerComponent',
    selector: 'header-component',
  };
}
