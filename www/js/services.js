angular.module('starter.services', [])

.factory('Stories', function($http, $q) {

  var url = "http://s3.amazonaws.com/pinelandsapp/newsfeed.json";
  var defer = $q.defer();

  return {
    all: function() {
      $http.get(url).success(function(data) {
        defer.resolve(data);
        console.log(data);
        console.log("Data finished loading.");
        final = data;
      })
        console.log("Data promised");
        console.log(defer.promise);
        return defer.promise;
    }
  }

})

.factory('Artists', function() {
  // Might use a resource here that returns a JSON array
  var artists = [{
    id: 0,
    name: 'The Early November',
    note: 'Band One',
    image: 'https://pbs.twimg.com/profile_images/434719844811149312/wVhoIQVD.jpeg'
  }, {
    id: 1,
    name: 'Jukebox The Ghost',
    note: 'Band One',
    image: 'https://pbs.twimg.com/profile_images/514637568197935104/v7R9C7wa.png'
  }, {
    id: 2,
    name: 'Hellogoodbye',
    note: 'Band One',
    image: 'http://emertainmentmonthly.com/wp-content/uploads/2014/04/Hellogoodbye.jpg'
  }, {
    id: 3,
    name: 'Hellogoodbye',
    note: 'Band One',
    image: 'http://emertainmentmonthly.com/wp-content/uploads/2014/04/Hellogoodbye.jpg'
  }
  ];


  return {
    all: function() {
      return artists;
    },
    get: function(artistId) {
      // Simple index lookup
      return artists[artistId];
    }
  }
});
