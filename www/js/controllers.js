angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope, Stories) {
  $scope.stories = Stories.all();
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ArtistsCtrl', function($scope, Artists) {
  $scope.artists = Artists.all();
})

.controller('ArtistDetailCtrl', function($scope, $stateParams, Artists) {
  $scope.artist = Artists.get($stateParams.artistId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
