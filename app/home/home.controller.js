import p from 'json!../data.json'
const data = p.projects



function HomeController($scope, $routeParams, $http, $location, $window) {
    $scope.message = 'This is Home';
    $scope.home = data;
    $scope.$on('$routeChangeSuccess', function() {
        //my nice script
        if ($('#home').length > 0) {
           // scrollFunction();
        }
    });
}

export {
    HomeController
};
