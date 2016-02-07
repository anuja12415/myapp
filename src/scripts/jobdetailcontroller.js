var app = angular.module("DemoApp.controllers",[]);

app.controller("mycontroller",["$scope", "$http","$window",function($scope, $http,$window) {
	    
		$http.get("jobdetail.json").success(function(data){
		    
	        $scope.companies = data.jobs;
	        
	    })
	    
	    var url = decodeURIComponent($window.location.search);
	     var paramsStr = url.split("?")[1].split("&");
	     var params = {};
	     if (paramsStr) {
	       for (i = 0; i < paramsStr.length; i++) {
	         var pEntry = paramsStr[i].split("=");
	         if (pEntry.length == 2) {
	           params[pEntry[0]] = pEntry[1];
	         }
	       }
	     }
	    
	     $scope.searchquery=params[pEntry[0]]
	    
	    
	    
	    


}
	    	
        
]);