$(document).on('ready', function(){
  var button = $('button')

  var mID= {};
    var bandInput = $('#bandInput');
    var showTime = [];
    var cityName = [];
    var venueName = [];
    var ticketStatus = [];
    var ticketURL = [];
    var facebookRSVP = [];
    var bandPic = [];
    var ticketLink = [];
    var bandName = [];

function addElement (ShowN, CityN, VenueN, TxSts, TxURL, FBVP) {
  // create a new div element
  // and give it some content
  var newVenue = document.createElement("div");
    newVenue.id='newVenueId';
    var BandPic = document.createElement("img");
    BandPic.id='BandPic';
    BandPic.src=bandPic;
    var topRight = document.createElement("div");
    topRight.id='topRight';
    var BandName = document.createElement("p");
    BandName.id = 'BandName';
    var VenueP = document.createElement("p");
    VenueP.id='VenueP';
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
    var newbandName = document.createTextNode(bandName);
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

  topRight.appendChild(BandName);
  topRight.appendChild(VenueP);
  topRight.appendChild(VenueC);
  topRight.appendChild(VenueT);
  btmRight.appendChild(VenueTS);
  btmRight.appendChild(VenueURL);
  btmRight.appendChild(VenueFB);


  BandName.appendChild(newbandName);

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

//------------------------------------------
button.on('click', function(){
  $.ajax({
          url: 'http://api.bandsintown.com/artists/'+bandInput.val()+'/events.json?api_version=2.0&app_id=PersonalProject&callback=showEvents',
          //'http://api.bandsintown.com/artists/Skrillex/events.json?api_version=2.0&app_id=PersonalProject',
          dataType: 'jsonp',
          method: "GET",
          success: function(data) {
            for (i=0;i<4;i++)
            {
            bandName= data[i].title;
            showTime = data[i].formatted_datetime;
            cityName = data[i].formatted_location;
            venueName = data[i].venue.name;
            ticketStatus = data[i].ticket_status;
            ticketURL = 'BUY NOW!!';//data[i].ticket_url;
            facebookRSVP = 'RSVP!';
            bandPic = data[i]['artists'][0]['image_url'];
            ticketLink= data[i].ticket_url;
            facebookLink= data[i].facebook_rsvp_url;
            addElement(showTime, cityName, venueName, ticketStatus, ticketURL, facebookRSVP);
            console.log(data);         //I think it goes under here
          }

        }
      });
    })
});
//search all shows by city 50 results per page results
//http://api.bandsintown.com/events/search.json?location=Boston,MA&page=2&app_id=YOUR_APP_ID

// search band by date
//http://api.bandsintown.com/events/search.json?artists[]=Crystal+Castlesk&date=2012-09-01,2012-12-01&app_id=YOUR_APP_ID
