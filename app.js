var app = angular.module('groceryApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '',
    views: {
      'header': {
        templateUrl: 'shared/header/header.html',
        //controller: 'HeaderController',
        //controllerAs: 'header'
      },
      'body': {
        templateUrl: 'components/home/home.html',
       // controller: 'HomeController',
       // controllerAs: 'home'
      }
    }
  });
  
});