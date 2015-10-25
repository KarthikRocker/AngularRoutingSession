$(function () {



    var app = angular.module("routingApp", ['ngRoute']);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/aboutus', {
                templateUrl: 'Views/AboutUs.html'
            })
            .when('/contactus', {
                templateUrl: 'Views/ContactUs.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);
});