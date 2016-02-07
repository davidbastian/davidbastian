function pageLocation($rootScope, $location) {

    $rootScope.$on('$routeChangeSuccess', function() {
        ga('send', 'pageview', $location.path());
    });

}

export {
    pageLocation
};
