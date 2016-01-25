
import p from 'json!../data.json'
const data = p.projects


function AboutController($scope, $http, $window, $location) {
            $scope.message = 'This is about';
            $scope.home = data;        
}

export {AboutController};