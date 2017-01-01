angular.module('egApp',['ui.router','ngResource','egApp.controllers','egApp.services']);

angular.module('egApp').config(function($stateProvider,$httpProvider){
    $stateProvider
        .state('clients',{
        url:'/a',
        templateUrl:'egfrontend/app/partials/clients.html',
        controller:'ClientListController'

    }).state('listAddress',{
        url:'/b/:id',
        templateUrl:'egfrontend/app/partials/show-address.html',
        controller:'ClientViewController'

    }).state('addAddress',{
        url:'/d/:id',
        templateUrl:'egfrontend/app/partials/add-address.html',
        controller:'AddressCreateController'

    }).state('editAddress',{
        url:'/e/:id',
        templateUrl:'egfrontend/app/partials/edit-address.html',
        controller:'AddressEditController'

    });
}).run(function($state){
   $state.go('clients');
});