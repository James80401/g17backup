
$(document).on('ready', function(){
  var button = $('button')
  var cityInfo = $('#cityInput');
  var stateInfo = $('#stateInput');
  // testing for if selection worked on the text boxes.
  // cityInfo.on('click', function(){
  //   console.log(cityInfo.val())
  //
  // });
  // stateInfo.on('click', function(){
  //   console.log(stateInfo.val())
  // });
    button.on('click', function(){
      event.preventDefault();
      var zipCode =
      $.ajax({
              url: 'https://www.zipcodeapi.com/rest/js-CV19L6yxnrcTPBpwGgZhT8UyrlwLONiqJkzuq72OzeIoQ7UxoTOh2JQu4nfTbyjU/city-zips.json/'+cityInfo.val()+'/'+stateInfo.val(),
              //my api key <js-CV19L6yxnrcTPBpwGgZhT8UyrlwLONiqJkzuq72OzeIoQ7UxoTOh2JQu4nfTbyjU>
              method: "GET",
              success: function(data) {
                alert(JSON.stringify(data));
              }
            });
console.log()
        //   $.ajax({
        // url: 'http://https://www.zipcodeapi.com/rest/xrJtnT1RxLF2hzlVQfPJemftaycRmvFTXonliodQaSSrrdnitd1HzhbKQoBcUh6R/distance.json/<zip_code1>/80524/mile',
        // //my api key <xrJtnT1RxLF2hzlVQfPJemftaycRmvFTXonliodQaSSrrdnitd1HzhbKQoBcUh6R>
        // method: "GET",
        // success: function(data) {
        //   alert(JSON.stringify(data));
        // }
      // });
    });
});

//
//
//       httpRequest = new XMLHttpRequest();
//
//       httpRequest.onreadystatechange = function(){
//           if (httpRequest.readyState === 4) {
//             if(httpRequest.status < 400) {
//               alert(httpRequest.responseText);
//             }
//           }
//
//         };
// httpRequest.open('GET', 'http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json');
// httpRequest.send();


// $.ajax({
//   url: "/api/getWeather";
//   success: function( data ) {
//     $( "#weather-temp" ).html( "<strong>" + data + "</strong> degrees" );
//   }
// });
