

function pageRouting($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("list", {
                url: "/list",
                template: require("./main.html")
            })
            .state("detail", {
                url: "/detail",
                template: '<h4>This is a super nice detail view</h4>'
            })
        $urlRouterProvider.otherwise("/list");
    }

export {pageRouting};