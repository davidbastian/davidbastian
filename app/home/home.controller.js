import p from 'json!../data.json'
const data = p.projects

function HomeController($scope) {
    $scope.message = 'This is Home';
    $scope.home = data;

    $('footer').addClass('cr');

}

export {
    HomeController
};
