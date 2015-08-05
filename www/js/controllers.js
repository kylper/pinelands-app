angular.module('pinelands.controllers', [])
.controller('ArtistsCtrl', function($scope, Artists) {
  $scope.artists = Artists.all();
})
.controller('ArtistDetailCtrl', function($scope, $stateParams, Artists, Setlist) {
  var artistId = $stateParams.artistId
  var artistDetail = Artists.get(artistId);
  $scope.artist = artistDetail;
  if (Setlist.getSetTime(0, artistId) != null){
    $scope.stage = Setlist.getStageName(0);
    $scope.settime = Setlist.getSetTime(0, artistId);
  } else if (Setlist.getSetTime(1, artistId) != null){
    $scope.stage = Setlist.getStageName(1);
    $scope.settime = Setlist.getSetTime(1, artistId);
  } else if (Setlist.getSetTime(2, artistId) != null){
    $scope.stage = Setlist.getStageName(2);
    $scope.settime = Setlist.getSetTime(2, artistId);
  }
  $scope.Link = function (url) {
    window.open(url,'_system');
  };
})
.controller('SetlistCtrl', function($scope, Setlist) {
  $scope.pinelandsList = Setlist.getStageArtists(0);
  $scope.timberList = Setlist.getStageArtists(1);
  $scope.vineList = Setlist.getStageArtists(2);
});
