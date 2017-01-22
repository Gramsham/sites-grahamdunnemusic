angular.module('grahamdunnemusic', ['ngRoute', 'RouteControllers']);
 
angular.module('grahamdunnemusic').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider

    .when('/', {
        templateUrl:'/index.html',
        controller: 'IndexController'
    })
    .when('/About', {
        templateUrl: 'templates/bio.html',
        controller: 'AboutController'
    });
    .when('/Productions', {
        templateUrl: 'templates/productions.html',
        controller: 'ProductionsController'
    });
    .when('/Compositions', {
        templateUrl: 'templates/compositions.html',
        controller: 'CompositionsController'
    });
    .when('/Guitar', {
        templateUrl: 'templates/guitar.html',
        controller: 'GuitarController'
    });
    .when('/Transcriptions', {
        templateUrl: 'templates/transcriptions.html',
        controller: 'TranscriptionsController'
    });
    .when('/Contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    });
});