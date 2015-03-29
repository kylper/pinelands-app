angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $stateParams) {
  $scope.Link = function (url) {
    window.open(url,'_system');
  };
  var currentDate = new Date();
  var futureDate = new Date(2015, 7, 15, 12) ;
  var timeDiff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  var clock = new FlipClock($('.countdownClock'), timeDiff, {countdown: true, clockFace: 'DailyCounter'});
})

.controller('NewsCtrl', function($scope, Stories) {
  Stories.all().then(function(data) {
      $scope.stories = data;
  });
  $scope.doRefresh = function() {
    $window.location.reload(true);
  };
})

.controller('ArtistsCtrl', function($scope, Artists) {
  $scope.artists = Artists.all();
})

.controller('ArtistDetailCtrl', function($scope, $stateParams, Artists) {
  $scope.artist = Artists.get($stateParams.artistId);
});
