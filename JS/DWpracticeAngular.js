var app = angular.module('myAngularApp', []); //empty array is for dependacy injection


app.controller('SimpleController', function ($scope) {
        $scope.customers = [{
                        namec: 'James Hoog',
                        city: 'New York'
                },
                {
                        namec: 'Nail Knite',
                        city: 'Paris'
                },
                {
                        namec: 'Pit Alex',
                        city: 'London'
                },
                {
                        namec: 'Mc Lyon',
                        city: 'Paris'
                },
                {
                        namec: 'Paul Adam',
                        city: 'Rome'
                },
                {
                        namec: 'Lauson Hen',
                        city: 'San Jose'
                }
        ];

        $scope.addCustomer = function () {
                $scope.customers.push({
                        namec: $scope.namec,
                        city: $scope.city
                });
        }

});
app.controller('locationController', function ($scope, $location) { //location built in service
        $scope.myUrl = $location.absUrl();
});

app.controller('httpController', function ($scope, $http) {
        $http.get("/HTML/usedHtmlPages/welcome.html").then(function (response) {
                $scope.httpResponse = response.data;
        });
});

app.controller('timeoutController', function ($scope, $timeout) {
        $scope.myHeader = "Are you watching closely?";
        $timeout(function () {
                $scope.myHeader = "Every magic trick consists of three parts: PLEDGE, TURN and PRESTIGE.";

        }, 2000);
});

app.controller('intervalController', function ($scope, $interval) {
        $scope.theTime = new Date().toLocaleTimeString();
        $interval(function () {
                $scope.theTime = new Date().toLocaleTimeString();
        }, 1000);
});

app.service('HEX', function () {
        this.myFunc = function (x) {
                return x.toString(16);
        }
});
app.controller('customServiceHex', function ($scope, HEX) {
        var a = Number($scope.number);
        $scope.NumbertoHex = function () {
                $scope.intTOhex = HEX.myFunc(a);
        }
         
         
});

app.controller('AddNumbersController', function ($scope) {
        $scope.AddNumbers = function () {
                var a = Number($scope.a);
                var b = Number($scope.b);
                $scope.sum = a + b;
        }
});
