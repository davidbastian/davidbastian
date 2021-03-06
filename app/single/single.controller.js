import p from 'json!../data.json'
const data = p.projects
import zepto from 'npm-zepto'


function SingleController($scope, $routeParams) {

    $scope.message = 'This is Single';
    $scope.slug = $routeParams.single;

    $scope.mobile = $('html').hasClass('mobile');
    $scope.ipad = $('html').hasClass('ipad');

    $('footer').removeClass('cr');

    //console.log($scope.mobile);

    $scope.inner = data.filter(function(entry) {
        //console.log(entry.slug);
        var slug = entry.slug.toLowerCase().split(' ').join('-');
        return slug === $scope.slug


    });


    var suNext = (data.indexOf($scope.inner[0])) + 1;


    //console.log(data.length);

    if (suNext < data.length) {
        $scope.next = (data[suNext].slug.toLowerCase().split(' ').join('-'));
    } else {
        $scope.next = (data[0].slug.toLowerCase().split(' ').join('-'));
    }


    $scope.project = $scope.inner[0];

    $scope.$emit('newPageLoaded', {
        'title': 'Some Page',
        'description': 'blah'
    });

}

export {
    SingleController
};
