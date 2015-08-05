angular.module('pinelands', ['ionic', 'pinelands.controllers', 'pinelands.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
  })

  .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html"
        }
      }
  })

  .state('app.artists', {
      url: "/artists",
      views: {
        'menuContent': {
          templateUrl: "templates/artists.html",
          controller: 'ArtistsCtrl'
        }
      }
  })

  .state('app.artistdetail', {
      url: "/artists/:artistId",
      views: {
        'menuContent': {
          templateUrl: "templates/artist-detail.html",
          controller: 'ArtistDetailCtrl'
        }
      }
  })

  .state('app.information', {
      url: "/info",
      views: {
        'menuContent': {
          templateUrl: "templates/info.html"
        }
      }
  })

  .state('app.faq', {
      url: "/faq",
      views: {
        'menuContent': {
          templateUrl: "templates/faq.html"
        }
      }
  })

  .state('app.map', {
      url: "/map",
      views: {
        'menuContent': {
          templateUrl: "templates/map.html"
        }
      }
  })

  .state('app.setlist', {
      url: "/setlist",
      views: {
        'menuContent': {
          templateUrl: "templates/setlist.html",
          controller: 'SetlistCtrl'
        }
      }
  })

  .state('app.sponsors', {
      url: "/sponsors",
      views: {
        'menuContent': {
          templateUrl: "templates/sponsors.html"
        }
      }
  })

  .state('app.venue', {
      url: "/venue",
      views: {
        'menuContent': {
          templateUrl: "templates/venue.html"
        }
      }
  })

  .state('app.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "templates/about.html"
        }
      }
  });

  $urlRouterProvider.otherwise('/app/home');

});
