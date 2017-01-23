angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {
        /*$scope.title = "Welcome To The Website of Graham Dunne";*/
    })  

    .controller('AboutController', function($scope) {
        /*$scope.title = "Welcome To The Website of Graham Dunne";*/
    })
    .controller('ProductionsController', function($scope) {
        /*$scope.title = "Welcome To The Website of Graham Dunne";*/
    })
    .controller('CompositionsController', function($scope) {
        /*$scope.title = "Welcome To The Website of Graham Dunne";*/
    })
    .controller('GuitarController', function($scope) {
        /*$scope.title = "Welcome To The Website of Graham Dunne";*/
    })
    .controller('TranscriptionsController', function($scope) {
        /*$scope.title = "Welcome To The Website of Graham Dunne";*/
    })
    .controller('ContactController', function($scope) {
        $scope.registrationUser = {};
 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
 
            console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
        }
    });
    