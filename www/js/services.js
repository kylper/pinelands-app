angular.module('pinelands.services', [])

.factory('ArtistInfoFactory', function() {
  var artists = [{
    "id": 0,
    "name": "The Early November",
    "location": "Hammonton, NJ",
    "image": "img/artists/1.png",
    "theme": "lightorange",
    "facebook": "earlynovember",
    "twitter": "theearlynov",
    "instagram": "theearlynovember"
  }, {
    "id": 1,
    "name": "Jukebox The Ghost",
    "location": "Philadelphia, PA",
    "image": "img/artists/2.png",
    "theme": "darkorange",
    "facebook": "jukeboxtheghost",
    "twitter": "JukeboxtheGhost",
    "instagram": "jukeboxtheghost"
  }, {
    "id": 2,
    "name": "The Spill Canvas",
    "location": "Sioux Falls, SD",
    "image": "img/artists/3.png",
    "theme": "darkblue",
    "facebook": "thespillcanvas",
    "twitter": "thespillcanvas",
    "instagram": "thespillcanvasofficial"
  }, {
    "id": 3,
    "name": "X Ambassadors",
    "location": "Brooklyn, NY",
    "image": "img/artists/4.png",
    "theme": "lightblue",
    "facebook": "XAmbassadors",
    "twitter": "XAmbassadors",
    "instagram": "XAmbassadors"
  }, {
    "id": 4,
    "name": "Good Old War",
    "location": "Philadelphia, PA",
    "image": "img/artists/5.png",
    "theme": "darkgreen",
    "facebook": "GoodOldWar",
    "twitter": "GoodOldWar",
    "instagram": "GoodOldWar"
  }, {
    "id": 5,
    "name": "Hellogoodbye",
    "location": "Long Beach, CA",
    "image": "img/artists/6.png",
    "theme": "lightgreen",
    "facebook": "hellogoodbyeband",
    "twitter": "itshellogoodbye",
    "instagram": "itshellogoodbye"
  }, {
    "id": 6,
    "name": "Vacationer",
    "location": "Philadelphia, PA",
    "image": "img/artists/7.png",
    "theme": "lightorange",
    "facebook": "vacationermusic",
    "twitter": "VacationerBand",
    "instagram": "vacationing"
  }, {
    "id": 7,
    "name": "Cruisr",
    "location": "Philadelphia, PA",
    "image": "img/artists/8.png",
    "theme": "darkorange",
    "facebook": "cruisrtheband",
    "twitter": "CRUISR",
    "instagram": "cruisr"
  }, {
    "id": 8,
    "name": "You Blew It!",
    "location": "Orlando, FL",
    "image": "img/artists/9.png",
    "theme": "darkblue",
    "facebook": "youblewitfl",
    "twitter": "youblewit",
    "instagram": "youblewit"
  }, {
    "id": 9,
    "name": "You Me & Everyone We Know",
    "location": "Lancaster, PA",
    "image": "img/artists/10.png",
    "theme": "lightblue",
    "facebook": "youmeandeveryoneweknow",
    "twitter": "YMAEWK",
    "instagram": "ymaewk"
  }, {
    "id": 10,
    "name": "A Great Big Pile Of Leaves",
    "location": "Brooklyn, NY",
    "image": "img/artists/11.png",
    "theme": "darkgreen",
    "facebook": "agreatbigpileofleaves",
    "twitter": "AGBPOL",
    "instagram": "agreatbigpileofleaves"
  }, {
    "id": 11,
    "name": "Northern Faces",
    "location": "Albany, NY",
    "image": "img/artists/12.png",
    "theme": "lightgreen",
    "facebook": "northernfaces",
    "twitter": "northernfaces",
    "instagram": "northernfaces"
  }, {
    "id": 12,
    "name": "Young Statues",
    "location": "Philadelphia, PA",
    "image": "img/artists/13.png",
    "theme": "lightorange",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 13,
    "name": "Raccoon Fighter",
    "location": "Brooklyn, NY",
    "image": "img/artists/14.png",
    "theme": "darkorange",
    "facebook": "RaccoonFighter",
    "twitter": "RACCOONFIGHTER",
    "instagram": "RACCOONFIGHTER"
  }, {
    "id": 14,
    "name": "Mo Lowda & The Humble",
    "location": "Philadelphia, PA",
    "image": "img/artists/15.png",
    "theme": "darkblue",
    "facebook": "MoLowda",
    "twitter": "MoLowda",
    "instagram": "MoLowda"
  }, {
    "id": 15,
    "name": "Your Persona",
    "location": "Hammonton, NJ",
    "image": "img/artists/16.png",
    "theme": "lightblue",
    "facebook": "YourPersonaBand",
    "twitter": "YPOfficial",
    "instagram": "your_persona"
  }, {
    "id": 16,
    "name": "Days Like These",
    "location": "Vineland, NJ",
    "image": "img/artists/17.png",
    "theme": "darkgreen",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 17,
    "name": "Liam & Me",
    "location": "Philadelphia, PA",
    "image": "img/artists/18.png",
    "theme": "lightgreen",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 18,
    "name": "Bonfires",
    "location": "Chicago, IL",
    "image": "img/artists/19.png",
    "theme": "lightorange",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 19,
    "name": "The Color & Sound",
    "location": "Boston, MA",
    "image": "img/artists/20.png",
    "theme": "darkorange",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 20,
    "name": "No Such Noise",
    "location": "Sicklerville, NJ",
    "image": "img/artists/21.png",
    "theme": "darkblue",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 21,
    "name": "Stellar Young",
    "location": "Albany, NY",
    "image": "img/artists/22.png",
    "theme": "lightblue",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 22,
    "name": "The Press War",
    "location": "Boston, MA",
    "image": "img/artists/23.png",
    "theme": "darkgreen",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 23,
    "name": "Cheezy & The Crackers",
    "location": "Millville, NJ",
    "image": "img/artists/24.png",
    "theme": "lightgreen",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 24,
    "name": "Plantation",
    "location": "Philadelphia, PA",
    "image": "img/artists/25.png",
    "theme": "lightorange",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 25,
    "name": "Man On A Mountain",
    "location": "Philadelphia, PA",
    "image": "img/artists/26.png",
    "theme": "darkorange",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 26,
    "name": "Where The Ocean Meets The Sky",
    "location": "South Jersey",
    "image": "img/artists/27.png",
    "theme": "darkblue",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 27,
    "name": "Palmas",
    "location": "Philadelphia, PA",
    "image": "img/artists/28.png",
    "theme": "lightblue",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  }, {
    "id": 28,
    "name": "Sleepyface",
    "location": "South Jersey",
    "image": "img/artists/29.png",
    "theme": "darkgreen",
    "facebook": "",
    "twitter": "",
    "instagram": ""
  },{
    "lastUpdated" : "20150804"
  }];
  var setlist = [{
    "id" : 0,
    "stagename": "Pinelands Stage",
    "artists": [{
        "artist" : "21",
        "time" : "2:00pm"
      },{
        "artist" : "18",
        "time" : "2:45pm"
      },{
        "artist" : "12",
        "time" : "3:30pm"
      },{
        "artist" : "11",
        "time" : "4:15pm"
      },{
        "artist" : "10",
        "time" : "5:00pm"
      },{
        "artist" : "7",
        "time" : "5:45pm"
      },{
        "artist" :"6",
        "time" : "6:30pm"
      },{
        "artist" :"3",
        "time" :  "7:25pm"
      },{
        "artist" :"5",
        "time" :  "8:25pm"
      },{
        "artist" :"0",
        "time" :  "9:35pm"
    }]
  },{
    "id" : 1,
    "stagename": "Timber Stage",
    "artists": [{
        "artist" :"22",
        "time" :  "2:15pm"
      },{
        "artist" :"19",
        "time" :  "3:00pm"
      },{
        "artist" :"13",
        "time" :  "3:45pm"
      },{
        "artist" :"9",
        "time" :  "4:35pm"
      },{
        "artist" :"8",
        "time" :  "5:25pm"
      },{
        "artist" :"2",
        "time" :  "6:15pm"
      },{
        "artist" :"4",
        "time" :  "7:40pm"
      },{
        "artist" :"1",
        "time" :  "8:40pm"
    }]
  },{
    "id" : 2,
    "stagename": "Vine Stage",
    "artists": [{
        "artist" :"25",
        "time" :  "1:45pm"
      },{
        "artist" :"27",
        "time" :  "2:25pm"
      },{
        "artist" :"28",
        "time" :  "3:05pm"
      },{
        "artist" :"24",
        "time" :  "3:45pm"
      },{
        "artist" :"16",
        "time" :  "4:25pm"
      },{
        "artist" :"17",
        "time" :  "5:10pm"
      },{
        "artist" :"20",
        "time" :  "5:55pm"
      },{
        "artist" :"26",
        "time" :  "6:40pm"
      },{
        "artist" :"15",
        "time" :  "7:25pm"
      },{
        "artist" :"23",
        "time" :  "8:10pm"
      },{
        "artist" :"14",
        "time" :  "8:55pm"
    }]
  },
    { "lastUpdated" : "20150802" }
];

  return {
    "Artists" : artists,
    "Setlist" : setlist
  };
})

// ArtistInfoFactory
.factory('Setlist', function(ArtistInfoFactory) {
  var artists = ArtistInfoFactory.Artists;
  var setlist = ArtistInfoFactory.Setlist;
  return {
    getStageArtists: function(stageID){
      var ae = setlist[stageID].artists;
      var exporte = new Array();
      for (var i = 0; i < ae.length; i++){
        exporte.push({
          "artistID" : ae[i].artist,
          "artist" : artists[ae[i].artist].name,
          "time" : ae[i].time
        });
      }
      return exporte;
    },
    getStageName: function(stageNumber) {
      return setlist[stageNumber].stagename;
    },
    getSetTime: function(stage, artistId) {
      var ae = setlist[stage].artists;
      for (var i = 0; i < ae.length; i++){
        if (artistId == setlist[stage].artists[i].artist) {
          return setlist[stage].artists[i].time;
        }
      }
    }

  }
})

.factory('Artists', function(ArtistInfoFactory) {
  var artists = ArtistInfoFactory.Artists;
  return {
    all: function() {
      return artists;
    },
    get: function(artistId) {
      return artists[artistId];
    }
  }
});
