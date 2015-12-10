var app = angular.module('app', ['ngRoute', 'ngAnimate', 'toaster', 'ngSanitize', 'mgcrea.ngStrap','smart-table']);

app.value('app-version', '0.0.1');

app.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            controller: 'ProductListCtrl',    
            templateUrl: '/views/list.html'
        })        
        .when('/404', {
            templateUrl: '404.html'
        })
        .otherwise({redirectTo: '/404'})
    ;

    $locationProvider.html5Mode(true).hashPrefix('!');
}]);

app.controller('ProductListCtrl', ['$scope','rest', function($scope, rest) {
        rest.path ='product/list';
        rest.get().success(function(data){
            $scope.products = data;
        });
        

}]);


// Need set url REST Api in controller!
app.service('rest', function ($http, $location, $routeParams) {

    return {

        baseUrl: 'http://server.at.loc/index.php/',
        path: undefined,

        models: function () {
            //console.log(Tools);
            return $http.get(this.baseUrl + this.path + location.search);//+ '?id='  + Tools.uniqueId());
        },

        model: function () {
            if ($routeParams.expand != null) {
                return $http.get(this.baseUrl + this.path + "/" + $routeParams.id + '?expand=' + $routeParams.expand);
            }
            return $http.get(this.baseUrl + this.path + "/" + $routeParams.id);
        },

        get: function () {
            return $http.get(this.baseUrl + this.path);
        },

        postModel: function (model) {
            return $http.post(this.baseUrl + this.path, model);
        },

        putModel: function (model) {
            return $http.put(this.baseUrl + this.path + "/" + $routeParams.id, model);
        },

        deleteModel: function () {
            return $http.delete(this.baseUrl + this.path);
        }
    };

});
