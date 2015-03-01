angular.module('starter.services', [])

.factory('Stories', function() {
  var stories = [
  {
  id: "8",
  text: "Don't forget the Early Bird tickets are LIMITED. Get them while you can! More bands being announced next month... #PinelandsMF",
  date: "February 28, 2015"
  },
  {
  id: "7",
  text: "EARLY BIRD GENERAL ADMISSION AND VIP PASSES ARE ON SALE NOW AT http://WWW.PINELANDSFEST.EVENTBRITE.COM  !",
  date: "February 27, 2015"
  },
  {
  id: "6",
  text: "This Friday we will release a limited amount of tickets at a special early bird rate! #PinelandsMF ",
  date: "February 25, 2015"
  },
  {
  id: "5",
  text: "We are stoked to have South Jersey legends, @theearlynov on the bill. Everyone loves a classic: http://youtu.be/hyVUtTvSLTs",
  date: "February 24, 2015"
  },
  {
  id: "4",
  text: "We'll be announcing bands every month from now until the fest.",
  date: "February 24, 2015"
  },
  {
  id: "3",
  text: "Thanks so much for the love you've given us so far! We can't wait to share the rest of the lineup with you all!",
  date: "February 24, 2015"
  },
  {
  id: "2",
  text: "It's lineup day!!! We'll be back in an hour to give you the goods... #PinelandsMF",
  date: "February 23, 2015"
  },
  {
  id: "1",
  text: "We are proud to announce the lineup for the first ever Pinelands Music Festival! More details soon... #PinelandsMF",
  date: "February 23, 2015"
  }
  ];

  return {
    all: function() {
      return stories;
    }
  }


  /*var url = "https://s3.amazonaws.com/pinelandsapp/newsfeed.json";
  var stories = [{text:"error"}];

   $http.jsonp(url).
     success(function(data, status, headers, config) {
       stories = data.query.results.entry;
     }).
     error(function(data, status, headers, config) {
       console.error('Error fetching feed:', data);
     });


  return {
    all: function() {
      return stories;
    }
  }*/
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
  }];


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
