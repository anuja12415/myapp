var appControllers = angular.module("DemoApp.controllers", []);

appControllers.controller("DemoController", ["$scope", function($scope) {
    $scope.message = "Hello World!";
}]);
