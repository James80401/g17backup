$(document).on('ready', function(){
  var button = $('button')
  //check musicbrainz for artist id

  var mID= {};
    var bandInput = $('#bandInput');
    //var zipCode = $('#zipCode');
    var showTime = [];
    var cityName = [];
    var venueName = [];
    var ticketStatus = [];
    var ticketURL = [];
    var facebookRSVP = [];
    var bandPic = [];

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
function addElement (ShowN, CityN, VenueN, TxSts, TxURL, FBVP) {
  // create a new div element
  // and give it some content
  var newVenue = document.createElement("div");
    newVenue.id='newVenueId';
    var BandPic = document.createElement("p");
    BandPic.id='BandPic';
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
    var VenueURL = document.createElement("p");
    VenueURL.id='VenueURL';
    var VenueFB = document.createElement("p");
    VenueFB.id='VenueFB';

  var newVenueName = document.createTextNode(venueName);
  var newCityName = document.createTextNode(cityName);
  var newShowTime = document.createTextNode(showTime);
  var curTicketStatus = document.createTextNode(ticketStatus);
  var curTicketURL = document.createTextNode(ticketURL);
  var fbookRSVP = document.createTextNode(facebookRSVP);
//-----------------------------------------
  newVenue.appendChild(BandPic);
  newVenue.appendChild(topRight);
  newVenue.appendChild(btmRight);

  topRight.appendChild(VenueP);
  topRight.appendChild(VenueC);
  topRight.appendChild(VenueT);
  btmRight.appendChild(VenueTS);
  btmRight.appendChild(VenueURL);
  btmRight.appendChild(VenueFB);



  VenueP.appendChild(newVenueName);

  VenueC.appendChild(newCityName);

  VenueT.appendChild(newShowTime);

  VenueTS.appendChild(curTicketStatus);

  VenueURL.appendChild(curTicketURL);

  VenueFB.appendChild(fbookRSVP); //add the text node to the newly created div.
  console.log(newVenue);

  //----------------------------------------
  // add the newly created element and its content into the DOM
  $(newVenue).insertBefore('.content')
}

//------------------------------------------
button.on('click', function(){
  //event.preventDefault();
  $.ajax({
          url: 'http://api.bandsintown.com/artists/'+bandInput.val()+'/events.json?api_version=2.0&app_id=PersonalProject&callback=showEvents',
          //'http://api.bandsintown.com/artists/Skrillex/events.json?api_version=2.0&app_id=PersonalProject',
          dataType: 'jsonp',
          method: "GET",
          success: function(data) {
            for (i=0;i<4;i++)
            {
            // console.log(data);
            // console.log(bandInput.val());
            showTime = data[i].formatted_datetime;
            cityName = data[i].formatted_location;
            venueName = data[i].venue.name;
            ticketStatus = data[i].ticket_status;
            ticketURL = data[i].ticket_url;
            facebookRSVP = data[i].facebook_rsvp_url;
            bandPic = data[i].artists[0].image_url;
            console.log(bandPic);
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
