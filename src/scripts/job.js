var app = angular.module("DemoApp.controllers",[]);

app.controller("mycontroller",["$scope", "$http", function($scope, $http) {
	    
		$http.get("jobs.json").success(function(data){
		    
	        $scope.companies = data.jobs;
	    });
	}
]);