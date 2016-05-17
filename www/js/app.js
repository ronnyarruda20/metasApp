'use strict';

angular.module('starter', ['ionic', 'starter.controllers','MetasAppServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
 
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
     
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MetaController'
  })

  .state('app.magistrado', {
    url: '/lista',
    views: {
      'menuContent': {
        templateUrl: 'templates/listaMagistrado.html',
        controller: 'MetaController'
      }
    }
  })

   .state('app.magistradoItem', {
    url: '/listaItem',
    views: {
      'menuContent': {
        templateUrl: 'templates/magistradoItem.html',
        controller: 'MetaController'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/lista');
});
