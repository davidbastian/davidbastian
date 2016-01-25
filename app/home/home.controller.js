
import p from 'json!../data.json'
const data = p.projects


function HomeController($scope, $http, $window, $location) {
            $scope.message = 'This is Home';        
}

export {HomeController};