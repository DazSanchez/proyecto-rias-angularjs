import template from './header.component.html';
import './header.component.scss';

class HeaderComponent {
  constructor() {}

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
