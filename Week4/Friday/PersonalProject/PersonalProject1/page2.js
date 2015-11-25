$(document).on('ready', function(){
  var button = $('button')
  //check musicbrainz for artist id

  var mID= {};
    var cityInput = $('#cityInput');
    //var zipCode = $('#zipCode');
    var showTime = [];
    var cityName = [];
    var venueName = [];
    var ticketStatus = [];
    var ticketURL = [];
    var facebookRSVP = [];
    var bandName = []

  //above is music ID variable to put whatever user input Artists ID

  //I will take the user ID and put it into a search type for the artist

  //example cur line - 'http://api.bandsintown.com/artists/Miike%20Snow/events.json?api_version=2.0&app_id=PersonalProject&callback=showEvents'
// example after edit -'http://api.bandsintown.com/artists/'+mID+'/events.json?api_version=2.0&app_id=PersonalProject&callback=showEvents'
//the mID variable replaces artist name in the url string
  // testing for if selection worked on the text boxes.
  // cityInfo.on('click', function(){
  //   console.log(cityInfo.val())
  //
  // });
  // stateInfo.on('click', function(){
  //   console.log(stateInfo.val())
  // });
  // saveSearchData();
function addElement (BandN, ShowN, CityN, VenueN, TxSts, TxURL, FBVP) {
  // create a new div element
  // and give it some content
  var newVenue = document.createElement("div");
    newVenue.id='newVenueId';
    var BandName = document.createElement("p");
    BandName.id='BandName';
    var topRight = document.createElement("div");
    topRight.id='topRight';
    var VenueP = document.createElement("p");
    VenueP.id='VenueP.id';
    var VenueC = document.createElement("p");
    VenueC.id='VenueC';
    var VenueT = document.createElement("p");
    VenueT.id='VenueT';
    var btmRight = document.createElement("div");
    btmRight.id='btmRight';
    var VenueTS = document.createElement("p");
    VenueTS.id='VenueTS';
    var VenueURL = document.createElement("a");
    VenueURL.id='VenueURL';
    VenueURL.setAttribute('a' , href=ticketLink);
    VenueURL.setAttribute('href', ticketLink);

    var VenueFB = document.createElement("a");
    VenueFB.id='VenueFB';
    VenueFB.setAttribute('a', href=facebookLink);
    VenueFB.setAttribute('href', facebookLink);

  var newVenueName = document.createTextNode(venueName);
  var newCityName = document.createTextNode(cityName);
  var newShowTime = document.createTextNode(showTime);
  var curTicketStatus = document.createTextNode(ticketStatus);
  var curTicketURL = document.createTextNode(ticketURL);
  var fbookRSVP = document.createTextNode(facebookRSVP);
  var newBandName = document.createTextNode(bandName);
//-----------------------------------------
  newVenue.appendChild(topRight);
  newVenue.appendChild(btmRight);

  topRight.appendChild(BandName);
  topRight.appendChild(VenueP);
  topRight.appendChild(VenueC);
  topRight.appendChild(VenueT);
  btmRight.appendChild(VenueTS);
  btmRight.appendChild(VenueURL);
  btmRight.appendChild(VenueFB);



  BandName.appendChild(newBandName)

  VenueP.appendChild(newVenueName);

  VenueC.appendChild(newCityName);

  VenueT.appendChild(newShowTime);

  VenueTS.appendChild(curTicketStatus);

  VenueURL.appendChild(curTicketURL);

  VenueFB.appendChild(fbookRSVP); //add the text node to the newly created div.
  //console.log(newVenue);

  //----------------------------------------
  // add the newly created element and its content into the DOM
  $(newVenue).insertBefore('.content')
}
console.log(cityInput);
//------------------------------------------
button.on('click', function(){
  console.log(cityInput.val());
  //event.preventDefault();
  $.ajax({//http:api.bandsintown.com/events/search.json?location=Boston,MA&page=2&app_id=YOUR_APP_ID
          url: 'http://api.bandsintown.com/events/search.json?location=Boston,MA&page=1+&app_id=PersonalProject',
//'http://api.bandsintown.com/events/search.json?location=Boston,MA&page=2&app_id=PersonalProject'
          dataType: 'jsonp',
          method: "GET",
          success: function(data) {
            for (i=0;i<4;i++)
            {
            // console.log(data);
            // console.log(bandInput.val());
            // showTime = data[i].datetime;
            // cityName = data[i].venue.city+ ", "+ data[i].venue.region;
            venueName = data[i].venue.name;
            ticketStatus = data[i].ticket_status;
            ticketURL = 'BUY NOW';//data[i].ticket_url;
            facebookRSVP = 'RSVP';//data[i].facebook_rsvp_url;
            ticketLink=data[i].ticket_url;
            facebookLink=data[i].url;
            bandName=data[i]['artists'][0]['name'];
            // console.log(showTime);
            // console.log(cityName);
            // console.log(venueName);
            // console.log(ticketStatus);
            // console.log(ticketURL);
            // console.log(facebookRSVP);
            addElement(showTime, cityName, venueName, ticketStatus, ticketURL, facebookRSVP);
            console.log(data);         //I think it goes under here
          }

        }
      });
    })
});

//_________________________________________________________________________

// function tickets
