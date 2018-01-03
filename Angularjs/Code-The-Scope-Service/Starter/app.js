var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
	$scope.name = 'tony';
	$scope.occupation = 'Coder';
    console.log($scope);
});

var searchPeople = function (firstName, lastName, height, age, occupation) {
	return 'Zoey Gao';
}

console.log(angular.injector().annotate(searchPeople));