function pageRouting($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("list", {
                url: "/list",
                template: '<h4>Lots of list items will go here33</h4>'
            })
            .state("detail", {
                url: "/detail",
                template: '<h4>This is a super nice detail view</h4>'
            })
        $urlRouterProvider.otherwise("/list");
    }


export {pageRouting};