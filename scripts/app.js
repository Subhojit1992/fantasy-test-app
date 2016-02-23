'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html'
        })

        .when('/dashboard', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .otherwise({ redirectTo: '/home' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/home' && !$rootScope.globals.currentUser) {
                $location.path('/home');
            }
        });
    }])


// goalkeepers factory
.factory('goalkprfactory', function(){
    var eachgoalKpr = [
        {name: 'Cech', country: 'ARS', price: 40},
        {name: 'Butland', country: 'STK', price: 50},
        {name: 'CeGomesch', country: 'WAT', price: 70},
    ];
    // return the array in this function
    function goalfacFunc(){
        return eachgoalKpr;
    }

    // return the whole function as a object
    return{
        goalfacFunc: goalfacFunc
    }
})




// defenders factory
.factory('defendersfactory', function(){
    var eachDefenders = [
        {name: 'Alderweireld', country: 'TOT', price: 60},
        {name: 'Dann', country: 'CRY', price: 25},
        {name: 'Monreal', country: 'ARS', price: 35},
    ];
    // return the array in this function
    function dfndrfacFunc(){
        return eachDefenders;
    }

    // return the whole function as a object
    return{
        dfndrfacFunc: dfndrfacFunc
    }
})

// midfielders factory
.factory('midfieldersfactory', function(){
    var eachMidfielders = [
        {name: 'Mahrez', country: 'LEI', price: 60},
        {name: 'Alli', country: 'TOT', price: 60},
        {name: 'Payet', country: 'WHU', price: 80},
    ];
    // return the array in this function
    function mdfldfunc(){
        return eachMidfielders;
    }

    // return the whole function as a object
    return{
        mdfldfunc: mdfldfunc
    }
});





