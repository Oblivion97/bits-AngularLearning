var app = angular.module('myAngularApp', []); //empty array is for dependacy injection


app.controller('SimpleController', function($scope) {
	$scope.customers = 
        [{namec:'James Hoog',city:'New York'},
        {namec:'Nail Knite',city:'Paris'},
        {namec:'Pit Alex',city:'London'},
        {namec:'Mc Lyon',city:'Paris'},
        {namec:'Paul Adam',city:'Rome'},
        {namec:'Lauson Hen',city:'San Jose'}];

        $scope.addCustomer = function(){
            $scope.customers.push({
                    namec:$scope.namec,
                    city:$scope.city
                });
        }
        
	});

	