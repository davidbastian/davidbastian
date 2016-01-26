import p from 'json!../data.json'
const data = p.projects

function scrollFunction() {
    function displaywheel(e) {
        var el = $('.wrap-container'),
            scrollTime = 2,
            scrollDistance = 200,

            evt = window.event || e,
            delta = evt.detail ? evt.detail / 3 : evt.wheelDelta / 120,
            scrollLeft = el.scrollLeft(),
            finalScroll = scrollLeft - parseInt((delta * scrollDistance), 10);

        //console.log(finalScroll) 

        TweenMax.to(el, scrollTime, {
            scrollTo: {
                x: finalScroll
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


function HomeController($scope, $routeParams, $http, $location, $window) {
    $scope.message = 'This is Home';
    $scope.home = data;
    $scope.$on('$routeChangeSuccess', function() {
        //my nice script
        if ($('#home').length > 0) {
            scrollFunction();
        }
    });
}

export {
    HomeController
};
