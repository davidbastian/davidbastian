function AppController($scope) {
    $scope.metadata = {
        'title': 'default title',
        'description': 'default description',
    };

    // whenever a controller emits the newPageLoaded event, we update the app's metadata
    $scope.$on('newPageLoaded', function(event, metadata) {
        $scope.metadata = metadata
    });


}

export {
    AppController
};
