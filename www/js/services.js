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
    fontsize: '30px'
  }, {
    id: 1,
    name: 'Jukebox The Ghost',
    note: 'Band One',
    image: 'http://www.yeproc.com/wp-content/uploads/2012/02/EricRyanAnderson_JUKEBOX2014_FINAL-2-525x350.jpg',
    fontsize: '30px'
  }, {
    id: 2,
    name: 'Hellogoodbye',
    note: 'Band One',
    image: 'http://emertainmentmonthly.com/wp-content/uploads/2014/04/Hellogoodbye.jpg',
    fontsize: '30px'
  }, {
    id: 3,
    name: 'Good Old War',
    note: 'Band One',
    image: 'http://www.sargenthouse.com/assets/gow/gow3.jpg',
    fontsize: '30px'
  }, {
    id: 4,
    name: 'X Ambassadors',
    note: 'Band One',
    image: 'http://www.mtv.com/crop-images/2013/08/22/Photo_XAmbassad_300RGB.jpg',
    fontsize: '30px'
  }, {
    id: 5,
    name: 'You Blew It!',
    note: 'Band One',
    image: 'http://s0.limitedrun.com/images/1030112/6948346806_377ec817db_o_copy.jpg',
    fontsize: '30px'
  }, {
    id: 6,
    name: 'You Me and Everyone We Know',
    note: 'Band One',
    image: 'http://killingthecabinet.com/wp-content/uploads/2013/06/You+Me+and+Everyone+We+Know+Promo.jpg',
    fontsize: '24px'
  }, {
    id: 7,
    name: 'A Great Big Pile of Leaves',
    note: 'Band One',
    image: 'http://i.ido.bi/assets/profile/2013/07/A-Great-Big-Pile-of-Leaves.jpg',
    fontsize: '24px'
  }, {
    id: 8,
    name: 'Northern Faces',
    note: 'Band One',
    image: 'http://thesorokaagency.com/wp-content/uploads/2014/09/NF-pic.jpg',
    fontsize: '30px'
  }, {
    id: 9,
    name: 'Young Statues',
    note: 'Band One',
    image: 'http://workinggroupmgmt.com/wp-content/uploads/2013/09/MitchellWojcik-C-2013.jpg',
    fontsize: '30px'
  }, {
    id: 10,
    name: 'Raccoon Fighter',
    note: 'Band One',
    image: 'http://f1.bcbits.com/img/0001807941_10.jpg',
    fontsize: '30px'
  }, {
    id: 11,
    name: 'Where the Ocean Meets the Sky',
    note: 'Band One',
    image: 'http://hangout.altsounds.com/attachments/reviews/5944d1287334916-ocean-meets-sky-empires-album-wtomts.jpg',
    fontsize: '24px'
  }, {
    id: 12,
    name: 'Locals',
    note: 'Band One',
    image: 'http://www.localsrock.com/assets/img/locals/carousel/TheLocals.jpg',
    fontsize: '30px'
  }, {
    id: 13,
    name: 'Sleepyface',
    note: 'Band One',
    image: 'http://decibelleuk.com/wp-content/uploads/2014/08/sleepyface-530x350.jpg',
    fontsize: '30px'
  }, {
    id: 14,
    name: 'Cheezy and the Crackers',
    note: 'Band One',
    image: 'http://www.eastcoastrocker.com/wp-content/uploads/2013/05/cheezy-and-the-crackers.jpg',
    fontsize: "24px"
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
