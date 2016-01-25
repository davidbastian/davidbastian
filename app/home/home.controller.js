
import p from 'json!../data.json'
const data = p.projects



export default class HomeController {
  constructor() {
    var vm = this;
    vm.title = 'Home';
    vm.data = data;
  }
}
