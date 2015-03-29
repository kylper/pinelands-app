angular.module('starter.services', [])

.factory('Stories', function($http, $q) {

  var url = "http://s3.amazonaws.com/pinelandsapp/newsfeed.json";
  var defer = $q.defer();

  return {
    all: function() {
      $http.get(url).success(function(data) {
        defer.resolve(data);
        console.log(data);
      })
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
    image: 'https://pbs.twimg.com/profile_images/434719844811149312/wVhoIQVD.jpeg',
    theme: 'lightorange'
  }, {
    id: 1,
    name: 'Jukebox The Ghost',
    note: 'Band One',
    image: '',
    theme: 'darkorange'
  }, {
    id: 2,
    name: 'Hellogoodbye',
    note: 'Band One',
    image: '',
    theme: 'darkblue'
  }, {
    id: 3,
    name: 'Magic Man',
    note: 'Band Details',
    image: '',
    theme: 'lightblue'
  }, {
    id: 4,
    name: 'Good Old War',
    note: 'Band Details',
    image: '',
    theme: 'darkgreen'
  }, {
    id: 5,
    name: 'X Ambassadors',
    note: 'Band One',
    image: '',
    theme: 'lightgreen'
  }, {
    id: 6,
    name: 'You Blew It!',
    note: 'Band One',
    image: '',
    theme: 'lightorange'
  }, {
    id: 7,
    name: 'You Me and Everyone We Know',
    note: 'Band One',
    image: '',
    theme: 'darkorange'
  }, {
    id: 8,
    name: 'A Great Big Pile of Leaves',
    note: 'Band One',
    image: '',
    theme: 'darkblue'
  }, {
    id: 9,
    name: 'Northern Faces',
    note: 'Band One',
    image: '',
    theme: 'lightblue'
  }, {
    id: 10,
    name: 'Young Statues',
    note: 'Band One',
    image: '',
    theme: 'darkgreen'
  }, {
    id: 11,
    name: 'Raccoon Fighter',
    note: 'Band One',
    image: '',
    theme: 'lightgreen'
  }, {
    id: 12,
    name: 'Where the Ocean Meets the Sky',
    note: 'Band One',
    image: '',
    theme: 'lightorange'
  }, {
    id: 13,
    name: 'Cheezy and the Crackers',
    note: 'Band One',
    image: '',
    theme: 'darkorange'
  }, {
    id: 14,
    name: 'Liam & Me',
    note: 'Band One',
    image: '',
    theme: 'darkblue'
  }, {
    id: 15,
    name: 'Plantation',
    note: 'Band One',
    image: '',
    theme: 'lightblue'
  }, {
    id: 16,
    name: 'Man on a Mountain',
    note: 'Band One',
    image: '',
    theme: 'darkgreen'
  }, {
    id: 17,
    name: 'Stellar Young',
    image: '',
    theme: 'lightgreen'
  }, {
    id: 18,
    name: 'Locals',
    note: 'Band One',
    image: '',
    theme: 'lightorange'
  }, {
    id: 19,
    name: 'Sleepyface',
    note: 'Band One',
    image: '',
    theme: 'darkorange'
  }
  ];

  /*{
    id: x,
    name: '',
    note: 'Band One',
    image: ''
  }*/

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
