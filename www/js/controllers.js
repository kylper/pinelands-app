angular.module('pinelands.controllers', [])
.controller('HomeCtrl', function($scope, $stateParams) {
  $scope.Link = function (url) {
    window.open(url,'_system');
  };
})
.controller('ArtistsCtrl', function($scope, Artists) {
  $scope.artists = Artists.all();
})
.controller('ArtistDetailCtrl', function($scope, $stateParams, Artists) {
  $scope.artist = Artists.get($stateParams.artistId);
  $scope.Link = function (url) {
    window.open(url,'_system');
  };
});
