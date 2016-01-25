routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('single', {
      url: '/single',
      template: require('./single.html'),
      controller: 'SingleController',
      controllerAs: 'single'
    });
}