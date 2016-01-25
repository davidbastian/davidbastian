function pageRouting($routeProvider, $locationProvider) {
                $routeProvider.

                when('/', {
                    template: require('./home/home.html'),
                    controller: 'Home'
                }).         
                when('/about', {
                    template: require('./about/about.html'),
                    controller: 'About'
                }).
                when('/:single', {
                    template: require('./single/single.html'),
                    controller: 'Single'
                }).
                otherwise({
                    redirectTo: '/'
                });

               //if (window.history && window.history.pushState) {
                   //$locationProvider.html5Mode(true);
               // }

            }

export {pageRouting};