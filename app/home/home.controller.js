import p from 'json!../data.json'
const data = p.projects

function HomeController($scope, $routeParams, $http, $location, $window) {
    $scope.message = 'This is Home';
    $scope.home = data;
}

export {
    HomeController
};
