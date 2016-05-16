angular.module('starter', ['ionic', 'starter.controllers','MagistradoServices'])

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
  })

  .state('app.magistrados1grau', {
    url: '/lista1grau',
    views: {
      'menuContent': {
        templateUrl: 'templates/listaMagistrado.html',
        controller: 'MasgitradoCtrl'
      }
    }
  })

   .state('app.magistrado', {
    url: '/lista1grau/:processoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/magistradoItem.html',
        controller: 'MasgitradoCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/lista1grau');
});
