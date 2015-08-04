angular.module('pinelands.services', [])

/*
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
*/

.factory('Artists', function() {
  // Might use a resource here that returns a JSON array
  var artists = [{
    id: 0,
    name: 'The Early November',
    location: 'Hammonton, NJ',
    image: 'img/artists/1.png',
    theme: 'lightorange',
    stage: 'Main Stage',
    time: '12:45'
  }, {
    id: 1,
    name: 'Jukebox The Ghost',
    location: 'Philadelphia, PA',
    image: 'img/artists/2.png',
    theme: 'darkorange',
    stage: 'Main Stage',
    time: '1:45'
  }, {
    id: 2,
    name: 'The Spill Canvas',
    location: 'Sioux Falls, SD',
    image: 'img/artists/3.png',
    theme: 'darkblue',
    stage: '',
    time: ''
  }, {
    id: 3,
    name: 'X Ambassadors',
    location: 'Brooklyn, NY',
    image: 'img/artists/4.png',
    theme: 'lightblue',
    stage: '',
    time: ''
  }, {
    id: 4,
    name: 'Good Old War',
    location: 'Philadelphia, PA',
    image: 'img/artists/5.png',
    theme: 'darkgreen',
    stage: '',
    time: ''
  }, {
    id: 5,
    name: 'Hellogoodbye',
    location: 'Long Beach, CA',
    image: 'img/artists/6.png',
    theme: 'lightgreen',
    stage: '',
    time: ''
  }, {
    id: 6,
    name: 'Vacationer',
    location: 'Philadelphia, PA',
    image: 'img/artists/7.png',
    theme: 'lightorange',
    stage: '',
    time: ''
  }, {
    id: 7,
    name: 'Cruisr',
    location: 'Philadelphia, PA',
    image: 'img/artists/8.png',
    theme: 'darkorange',
    stage: '',
    time: ''
  }, {
    id: 8,
    name: 'You Blew It!',
    location: 'Orlando, FL',
    image: 'img/artists/9.png',
    theme: 'darkblue',
    stage: '',
    time: ''
  }, {
    id: 9,
    name: 'You Me & Everyone We Know',
    location: 'Lancaster, PA',
    image: 'img/artists/10.png',
    theme: 'lightblue',
    stage: '',
    time: ''
  }, {
    id: 10,
    name: 'A Great Big Pile Of Leaves',
    location: 'Brooklyn, NY',
    image: 'img/artists/11.png',
    theme: 'darkgreen',
    stage: '',
    time: ''
  }, {
    id: 11,
    name: 'Northern Faces',
    location: 'Albany, NY',
    image: 'img/artists/12.png',
    theme: 'lightgreen',
    stage: '',
    time: ''
  }, {
    id: 12,
    name: 'Young Statues',
    location: 'Philadelphia, PA',
    image: 'img/artists/13.png',
    theme: 'lightorange',
    stage: '',
    time: ''
  }, {
    id: 13,
    name: 'Raccoon Fighter',
    location: 'Brooklyn, NY',
    image: 'img/artists/14.png',
    theme: 'darkorange',
    stage: '',
    time: ''
  }, {
    id: 14,
    name: 'Mo Lowda & The Humble',
    location: 'Philadelphia, PA',
    image: 'img/artists/15.png',
    theme: 'darkblue',
    stage: '',
    time: ''
  }, {
    id: 15,
    name: 'Your Persona',
    location: 'Hammonton, NJ',
    image: 'img/artists/16.png',
    theme: 'lightblue',
    stage: '',
    time: ''
  }, {
    id: 16,
    name: 'Days Like These',
    location: 'Vineland, NJ',
    image: 'img/artists/17.png',
    theme: 'darkgreen',
    stage: '',
    time: ''
  }, {
    id: 17,
    name: 'Liam & Me',
    location: 'Philadelphia, PA',
    image: 'img/artists/18.png',
    theme: 'lightgreen',
    stage: '',
    time: ''
  }, {
    id: 18,
    name: 'Bonfires',
    location: 'Chicago, IL',
    image: 'img/artists/19.png',
    theme: 'lightorange',
    stage: '',
    time: ''
  }, {
    id: 19,
    name: 'The Color & Sound',
    location: 'Boston, MA',
    image: 'img/artists/20.png',
    theme: 'darkorange',
    stage: '',
    time: ''
  }, {
    id: 20,
    name: 'No Such Noise',
    location: 'Sicklerville, NJ',
    image: 'img/artists/21.png',
    theme: 'darkblue',
    stage: '',
    time: ''
  }, {
    id: 21,
    name: 'Stellar Young',
    location: 'Albany, NY',
    image: 'img/artists/22.png',
    theme: 'lightblue',
    stage: '',
    time: ''
  }, {
    id: 22,
    name: 'The Press War',
    location: 'Boston, MA',
    image: 'img/artists/23.png',
    theme: 'darkgreen',
    stage: '',
    time: ''
  }, {
    id: 23,
    name: 'Cheezy & The Crackers',
    location: 'Millville, NJ',
    image: 'img/artists/24.png',
    theme: 'lightgreen',
    stage: '',
    time: ''
  }, {
    id: 24,
    name: 'Plantation',
    location: 'Philadelphia, PA',
    image: 'img/artists/25.png',
    theme: 'lightorange',
    stage: '',
    time: ''
  }, {
    id: 25,
    name: 'Man On A Mountain',
    location: 'Philadelphia, PA',
    image: 'img/artists/26.png',
    theme: 'darkorange',
    stage: '',
    time: ''
  }, {
    id: 26,
    name: 'Where The Ocean Meets The Sky',
    location: 'South Jersey',
    image: 'img/artists/27.png',
    theme: 'darkblue',
    stage: '',
    time: ''
  }, {
    id: 27,
    name: 'Palmas',
    location: 'Philadelphia, PA',
    image: 'img/artists/28.png',
    theme: 'lightblue',
    stage: '',
    time: ''
  }, {
    id: 28,
    name: 'Sleepyface',
    location: 'South Jersey',
    image: 'img/artists/29.png',
    theme: 'darkgreen',
    stage: '',
    time: ''
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
