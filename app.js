var app = angular.module('groceryApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '',
      views: {
        'header': {
          templateUrl: 'shared/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'header'
        },
        'body': {
          templateUrl: 'components/home/home.html',
         // controller: 'HomeController',
         // controllerAs: 'home'
        }
      }
    });

    $stateProvider.state('trip', {
      url: '/build',
      views: {
        'header': {
          templateUrl: 'shared/header/header.html',
          //controller: 'HeaderController',
          //controllerAs: 'header'
        },
        'body': {
          templateUrl: 'components/trip-list/trip.html',
         // controller: 'HomeController',
         // controllerAs: 'home'
        }
      }
    });
  
    $stateProvider.state('quick', {
      url: '/quick',
      views: {
        'header': {
          templateUrl: 'shared/header/header.html',
          //controller: 'HeaderController',
          //controllerAs: 'header'
        },
        'body': {
          templateUrl: 'components/quick-list/quick.html',
          controller: 'QuickListController',
          controllerAs: 'quick'
        }
      }
    });

});