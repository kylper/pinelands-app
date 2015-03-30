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
    location: 'Hammonton, NJ',
    image: 'https://pbs.twimg.com/profile_images/434719844811149312/wVhoIQVD.jpeg',
    theme: 'lightorange'
  }, {
    id: 1,
    name: 'Jukebox The Ghost',
    location: 'Philadelphia, PA',
    image: '',
    theme: 'darkorange'
  }, {
    id: 2,
    name: 'Hellogoodbye',
    location: 'Long Beach, CA',
    image: '',
    theme: 'darkblue'
  }, {
    id: 3,
    name: 'Magic Man',
    location: 'Boston, MA',
    image: '',
    theme: 'lightblue'
  }, {
    id: 4,
    name: 'Good Old War',
    location: 'Philadelphia, PA',
    image: '',
    theme: 'darkgreen'
  }, {
    id: 5,
    name: 'X Ambassadors',
    location: 'Brooklyn, NY',
    image: '',
    theme: 'lightgreen'
  }, {
    id: 6,
    name: 'You Blew It!',
    location: 'Orlando, FL',
    image: '',
    theme: 'lightorange'
  }, {
    id: 7,
    name: 'You Me and Everyone We Know',
    location: 'Lancaster, PA',
    image: '',
    theme: 'darkorange'
  }, {
    id: 8,
    name: 'A Great Big Pile of Leaves',
    location: 'Brooklyn, NY',
    image: '',
    theme: 'darkblue'
  }, {
    id: 9,
    name: 'Northern Faces',
    location: 'Albany, NY',
    image: '',
    theme: 'lightblue'
  }, {
    id: 10,
    name: 'Young Statues',
    location: 'Philadelphia, PA',
    image: '',
    theme: 'darkgreen'
  }, {
    id: 11,
    name: 'Raccoon Fighter',
    location: 'Brooklyn, NY',
    image: '',
    theme: 'lightgreen'
  }, {
    id: 12,
    name: 'Where the Ocean Meets the Sky',
    location: 'South Jersey',
    image: '',
    theme: 'lightorange'
  }, {
    id: 13,
    name: 'Cheezy and the Crackers',
    location: 'Millville, NJ',
    image: '',
    theme: 'darkorange'
  }, {
    id: 14,
    name: 'Liam & Me',
    location: 'Philadelphia, PA',
    image: '',
    theme: 'darkblue'
  }, {
    id: 15,
    name: 'Plantation',
    location: 'Philadelphia, PA',
    image: '',
    theme: 'lightblue'
  }, {
    id: 16,
    name: 'Man on a Mountain',
    location: 'Philadelphia, PA',
    image: '',
    theme: 'darkgreen'
  }, {
    id: 17,
    name: 'Stellar Young',
    location: 'Albany, NY',
    image: '',
    theme: 'lightgreen'
  }, {
    id: 18,
    name: 'Locals',
    location: 'Philadelphia, PA',
    image: '',
    theme: 'lightorange'
  }, {
    id: 19,
    name: 'Sleepyface',
    location: 'South Jersey',
    image: '',
    theme: 'darkorange'
  }
  ];

  /*{
    id: x,
    name: '',
    location: 'Band One',
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
