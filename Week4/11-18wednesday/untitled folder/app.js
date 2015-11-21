
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
  // saveSearchData();
    button.on('click', function(){
      event.preventDefault();
      var zipCode = {};
      var distance = {};
      $.ajax({
              url: 'https://www.zipcodeapi.com/rest/js-CV19L6yxnrcTPBpwGgZhT8UyrlwLONiqJkzuq72OzeIoQ7UxoTOh2JQu4nfTbyjU/city-zips.json/'+cityInfo.val()+'/'+stateInfo.val(),
              //my api key <js-CV19L6yxnrcTPBpwGgZhT8UyrlwLONiqJkzuq72OzeIoQ7UxoTOh2JQu4nfTbyjU>
              method: "GET",
              success: function(data) {
                console.log(data);
                // alert(JSON.stringify(data));

              var distance = {};
              $.ajax({
                url:'https://www.zipcodeapi.com/rest/js-OQMTMvUyxu5nfS2bUK8cB5BDtQmhuXFjNrcAW68uBeRR6T21DaefgPTJGf1adGt0/distance.json/80524/'+zipCode+'/mile',
                //0Q4PWI5bkS1pL5zA9w59oL0dvau2vABvqFlnoqzJiA84GHFQeL0Cw0Q1bk4HVFcm
                //js-OQMTMvUyxu5nfS2bUK8cB5BDtQmhuXFjNrcAW68uBeRR6T21DaefgPTJGf1adGt0
                method:'GET',
                success: function(data) {
                  distance = data;
                  console.log(distance)
                }
              })
            }
            });
            // console.log(zipCode.responseText)
      //     $.ajax({
      //   url: 'https://www.zipcodeapi.com/rest/NKYTaNaRyi7dYJCrMEnzQ5e7GHy9f3c2NaWYY6QxpXKoGnQs1e2SkgZ1XxacBmfo/distance.json/80524/'+zipCode+'/mile',
      //   //my api key <xrJtnT1RxLF2hzlVQfPJemftaycRmvFTXonliodQaSSrrdnitd1HzhbKQoBcUh6R>
      //   method: "GET",
      //   success: function(data) {
      //     alert(JSON.stringify(data));
      //   }
      // });
    });
});
//save input fields into local storage for users to redo the process.
//we should try to confirm if what we want is already in storeage.
                //on page load
                //
                // funciton saveSearchData(){
                //   localStorage.setItem('city')
                // };
                // funciton readSearchData(){
                //   localStorage.setItem('state')
                // };
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
