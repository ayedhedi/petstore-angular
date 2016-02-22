/**
 * Created by ayed.h on 17/02/2016.
 */

petStoreApp

    .config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/shared/login/loginView.html',
                controller: 'LoginCtrl'
            })
            .when('/pets', {
                templateUrl: 'app/components/pets/petsView.html',
                controller: 'PetsCtrl',
                controllerAs: 'PetsCtrl'
            })
            .when('/pet/:petId', {
                templateUrl: 'app/components/pet/petView.html',
                controller: 'PetCtrl'
            })
            .when('/addPet', {
                templateUrl: 'app/components/pet/petCreateView.html',
                controller: 'PetCreateCtrl'
            })
            .otherwise({redirectTo: '/login'});

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])

;
