angular.module('grahamdunnemusic', ['ngRoute', 'RouteControllers']);
 
angular.module('grahamdunnemusic').config(function($locationProvider, $routeProvider) {
    //$locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl:'templates/home.html',
        controller: 'HomeController'
    })
    .when('/bio', {
        templateUrl: 'templates/bio.html',
        controller: 'AboutController'
    })
    .when('/productions', {
        templateUrl: 'templates/productions.html',
        controller: 'ProductionsController'
    })
    .when('/compositions', {
        templateUrl: 'templates/compositions.html',
        controller: 'CompositionsController'
    })
    .when('/guitar', {
        templateUrl: 'templates/guitar.html',
        controller: 'GuitarController'
    })
    .when('/transcriptions', {
        templateUrl: 'templates/transcriptions.html',
        controller: 'TranscriptionsController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    });
});