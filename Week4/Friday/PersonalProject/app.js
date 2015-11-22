$(document).on('ready', function(){
  var button = $('button')
  //check musicbrainz for artist id

  var mID= {};
    var bandInput = $('#bandInput');

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
    button.on('click', function(){
      event.preventDefault();
      $.ajax({
              url: 'http://api.bandsintown.com/artists/'+bandInput.val()+'/events.json?api_version=2.0&app_id=PersonalProject&callback=showEvents',
              //'http://api.bandsintown.com/artists/Skrillex/events.json?api_version=2.0&app_id=PersonalProject',
              dataType: 'jsonp',
              method: "GET",
              success: function(data) {
                console.log(data);
                console.log(bandInput.val());
                // alert(JSON.stringify(data));
}
});
})
});
