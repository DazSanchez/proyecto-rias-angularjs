import template from './create-acount.component.html';
import './create-acount.component.scss';

class CreateAcountComponent {
  constructor() {}

  $onInit() {}
}

CreateAcountComponent.$inject = [];

export default function component() {
  return {
    controller: CreateAcountComponent,
    template,
    controllerAs: '$createAcountPage',
  };
}
