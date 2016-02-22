/**
 * Created by ayed.h on 17/02/2016.
 */

loginMod

    .factory('AuthenticationService',
        function ($rootScope, $http) {
            var service = {};
            service.Login = function (username, password, callback) {
                var headers = {
                    authorization : "Basic " + btoa(username + ":" + password)
                };
                console.log(username+":"+password);
                $http.get('/apipetsotre/login', {headers : headers}).success(function(data) {
                    $rootScope.authenticated = !!data.name;
                    callback();
                }).error(function() {
                    $rootScope.authenticated = false;
                    callback();
                });
            };

            service.ClearCredentials = function () {
                $rootScope.authenticated = false;
            };

            return service;
        }
    )

;
