var app = angular.module('myApp', []);//AngularJS Module

app.controller('NameController', function ($scope) {//AngularJS Controller
    $scope.firstName = "Mahmudul";
    $scope.lastName = "Hasan";
})