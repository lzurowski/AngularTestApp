var app = angular.module('pi2', ['ngRoute', 'ngAnimate', 'toaster', 'ngSanitize', 'mgcrea.ngStrap']);

app.value('app-version', '0.0.1');

app.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/views/list.html'
        })        
        .when('/404', {
            templateUrl: '404.html'
        })
        .otherwise({redirectTo: '/404'})
    ;

    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('authInterceptor');
}]);

//redirect if not auth
app.run(['$rootScope', '$location',  '$route', 'rest','errorCallback', function ($rootScope, $location, $route, rest, errorCallback) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (true === next.requireAuth) {
            //sprawdzamy czy uzytkownik jest zalogowany zalogowany 
            rest.path = 'user/is-logged';
            /*var errorCallback = function (data) {
                toaster.clear();
                toaster.pop("Status: " + data.status + " " + data.name, data.message);
            };*/
            rest.get().success(function (data) {}).error(errorCallback);
            event.preventDefault();
        }
       
    });
}]);

app.factory('errorCallback', function(toaster){
        var errorCallback = function (data) {
            toaster.clear();
            toaster.pop("Status: " + data.status + " " + data.name, data.message);
        };
        return errorCallback;
});

app.factory('authInterceptor', function ($q, $window, $location) {
    return {
        request: function (config) {
            if ($window.sessionStorage.access_token) {
                //HttpBearerAuth
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.access_token;
            }
            return config;
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                $location.path('/login').replace();
            }
            return $q.reject(rejection);
        }
    };
});

// Need set url REST Api in controller!
app.service('rest', function ($http, $location, $routeParams) {

    return {

        baseUrl: 'http://rest.pi2.loc/',
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

app.directive('login', ['$http', function ($http) {
        return {
            transclude: true,
            link: function (scope, element, attrs) {
                scope.isGuest = window.sessionStorage.access_token == undefined;
            },
            template: '<a href="login" ng-if="isGuest">Login</a>'
        }
    }])
    .filter('checkmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    });


app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
