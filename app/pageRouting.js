

function pageRouting($routeProvider, $locationProvider) {
                $routeProvider.

                when('/home', {
                    template: require('./home/home.html'),
                    controller: 'Home'
                }).         
                when('/about', {
                    template: "<h4>Lots of list items will go here333</h4>"
                    //controller: 'BlogDetail'
                }).
                otherwise({
                    redirectTo: '/home'
                });

               //if (window.history && window.history.pushState) {
                   //$locationProvider.html5Mode(true);
               // }

            }

export {pageRouting};