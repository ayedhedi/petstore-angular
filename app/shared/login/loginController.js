/**
 * Created by ayed.h on 17/02/2016.
 */

loginMod

    .controller('LoginCtrl', function($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function() {
                if($rootScope.authenticated === true) {
                    $location.path('/pets');
                }
            });
        };
    })

;
