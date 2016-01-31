import p from 'json!../data.json'
const data = p.projects
import zepto from 'npm-zepto'


function SingleController($scope, $routeParams) {

    $scope.message = 'This is Single';
    $scope.slug = $routeParams.single;

    $scope.inner = data.filter(function(entry) {
        //console.log(entry.slug);
        var slug = entry.slug.toLowerCase().split(' ').join('-');
        return slug === $scope.slug
    });
    $scope.project = $scope.inner[0];
    $scope.$emit('newPageLoaded', { 'title': 'Some Page', 'description': 'blah' });

}

export {
    SingleController
};
