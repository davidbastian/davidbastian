import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './single.routes';
import SingleController from './single.controller';

export default angular.module('app.single', [uirouter])
  .config(routing)
  .controller('SingleController', SingleController)
  .name;