var app = angular.module('testApp', []);
//controller
app.controller('myController', function($scope, $http) {	

	//fetch json records of all projects
	$http.get('js/projects.json')		
		// binding the data to the $scope variable
		.success (function(data){$scope.projects = data;})
		
		//return blank record if something goes wrong
		.error(function(data, status) {
				console.error('failure loading the projects record', status, data);
				$scope.projects={};
		});
		 
		//for sorting of records
		$scope.sort = function(keyname){
			$scope.sortKey = keyname;   //set the sortKey to the param passed
			$scope.reverse = !$scope.reverse; //if true make it false and vice versa
		}
		
		//reset of records
		$scope.reset = function(){$scope.search = '';}
});



