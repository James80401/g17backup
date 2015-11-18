//get input from user
  //select the dom input
  var cityInput = document.querySelector('#cityInput');
  var stateInput = document.querySelector('#stateInput');
  console.log(cityInput);
    //read dom input value
    //user types data in form
      //add click event for form
    var button = document.querySelector('button');
    button.addEventListener('click', funciton(event){
      event.preventDefault();

//call pit api docs
  //need zip codes for distance
    //use city/state text input for zip codes
    var citZipsReq = new XMLHttpResuest();
    cityZipsReq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          var cityZip = JSON.parse(this.responseText).zip_codes[0];
          console.log(this.responseText);
        }
    }
    });
    cityZipsReq.open('GET' 'https://www.zipcodeapi.com/rest/nUZa6N1716JOQEEOPbei7hs7HwL8cG8zA8KGWMOXSxLIcqx2CLkJ3NRKkCSwj15T/city-zips.<format>/'+cityInput.val+'/'+stateInput.val);
    cityZipsReq.send();


    var distanceReq = new XMLHttpResuest();
    distanceReq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          var cityZip = JSON.parse(this.responseText).zip_codes[0];
          console.log(this.responseText);
        }
    }
    });
    distanceReq.open('GET' 'https://www.zipcodeapi.com/rest/nUZa6N1716JOQEEOPbei7hs7HwL8cG8zA8KGWMOXSxLIcqx2CLkJ3NRKkCSwj15T/distance.json/'+cityZip+'/80524/mile';
    distanceReq.send();
      //make api call to CityZips
        //then use Api distance to find distance between zip city and foco
//find user zip code
//use user zipcode for cities as api call
//make an api call to the zip code api for distance
//make an api call to open weather
//use returned data to update page
