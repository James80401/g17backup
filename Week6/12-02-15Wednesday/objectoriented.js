'use strict';

var food_to_Eat = function(type, surfaceArea, weight, dTC, status, cook){
  var _type = type;
  var _surfaceArea = surfaceArea;
  var _weight = weight;
  var _dTC = dTC;
  var _status = status;
  var _cook = cook;
  var food = {
    _type: 'meat',
    _surfaceArea: 96,
    _weight: 'surfaceArea'*.1044,
    _dTC: 2.5,
    _status:'uncooked',
    _cook:(function(surfaceArea, weight, dTC, status){
      timeInput = weight*surfaceArea*dTC;
        if (timeInput === true) {
          status = 'cooked';
        }
      })
    }
    return {

}


var stove = {
  pluggedIn: true,
  time: 0,
  stoveTopon: {
    on: false,
    heat: 0,
    timer: false
  },
  ovenOn: {
      on: false,
      heat: false,
      timer: false
    },
//SA/6/sqrtcur/1.6 = dtc
  bake: function(food, heat, time){
    //  heatInput = prompt("Enter the heat level for your cooking")
    //  timeInput = prompt("If you would like to use a timer please enter your time")
      if (this.heat === true){
        if (time === true){
          heat = heatInput;
          time = timeInput;
            if (time = undefined || 0){
              while (heat === true){
                time++
                if (time > 300){
                  console.log("Your house burned down, you suck");
                }
                else {(cook)}
              }
            }
          console.log("Good job! Timer set, and heat is on. You'll eat food soon!")
        } if (time < 5 ) {
          console.log("That wasn't hardly any time at all, it's not even heated up right!")
        }

         else {
          console.log("You don't have a timer on be careful");

        }
      }else {
        console.log("Oven is off nothing will happen")
      }
    //  else{
    //   console.log("Oven isn't even plugged in. Come on! Dude!") //It's voice response is running off batteries
    // }
  }
}
}
