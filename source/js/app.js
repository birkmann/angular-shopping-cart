"use strict";

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/view1', {
        templateUrl:'templates/view1.html',
        controller: 'view1Ctrl'
    })
    .when('/view2', {
        templateUrl:'/templates/view2.html',
        controller: 'view2Ctrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});