
import p from 'json!../data.json'
const data = p.projects


export default class SingleController {
  constructor() {
    var vm = this;
    console.log(vm.location);
    vm.title = 'Single';

  }
}
