var routeApp = angular.module('routeApp',['ngRoute']);  
routeApp.config(['$routeProvider',function ($routeProvider) {  
    $routeProvider
        .when('/list', {  
            templateUrl: '_list.html',  
            controller: 'listCtl'  
        })  
        .when('/list/:id', {  
            templateUrl: '_info.html',  
            controller: 'infoCtl'  
        })  
        .otherwise({  
            redirectTo: '/list'  
        });  
}]);