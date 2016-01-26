import p from 'json!../data.json'
const data = p.projects
import zepto from 'npm-zepto'

function scrollFunction() {

    function displaywheel(e) {
        var el = $('.wrap-container'),
            scrollTime = 2,
            scrollDistance = 270,

            evt = window.event || e,
            delta = evt.detail ? evt.detail / 3 : evt.wheelDelta / 120,
            scrollTop = el.scrollTop(),
            finalScroll = scrollTop - parseInt((delta * scrollDistance), 10);

        //console.log(finalScroll) 

        TweenMax.to(el, scrollTime, {
            scrollTo: {
                y: finalScroll
            },
            ease: Expo.easeOut,
            overwrite: 5
        });

    }

    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
    if (document.attachEvent) {
        document.attachEvent("on" + mousewheelevt, displaywheel)
    } else if (document.addEventListener) {
        document.addEventListener(mousewheelevt, displaywheel, false)
    }

}

function SingleController($scope, $routeParams, $http, $location, $window) {
    $scope.message = 'This is Single';
    $scope.slug = $routeParams.single;

    $scope.inner = data.filter(function(entry) {

        //console.log(entry.slug);
        var slug = entry.slug.toLowerCase().split(' ').join('-');
        return slug === $scope.slug
    });

    $scope.project = $scope.inner[0];

    $scope.$on('$routeChangeSuccess', function() {
        if ($('#single').length > 0) {
            
           scrollFunction();
        }
    });

    $scope.$on('$timeout', function() {
        if ($('#single').length > 0) {
            
           console.log('hola');
        }
    });


}

export {
    SingleController
};
