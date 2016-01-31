import p from 'json!../data.json'
const data = p.projects

function FullController($scope) {
    $scope.message = 'This is Full';
    $scope.full = data;
}

export {
    FullController
};
