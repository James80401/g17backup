//pretty big program, but all the user needs to do to use it is call theirToaster.toast(item)
var Toaster = function() {

  //Internals that we are hiding from the outside world
  //AKA 'private' variables
  //the world doesn't have to know how any of this works
  //we can also stop them from modifying into a broken or invalid state by hiding it.
  var _temp = 0;
  var _time = 0;

  //internals can be variables, objects, functions and anything else
  var isToastable = function(){
    return _temp > 200 && _time > 30;
  };

  var initTempAndTime = function(){
    if(_temp === 0){
      _temp = 300;
    }
    if(_time === 0){
      _time = 60;
    }
  };

  //Interface to communicate with the outside world
  //Defines what states and behaviors the outside world has access to
  return {
    //behaviors
    turnUpTemperature: function(){
      //Internal logic of functions is hidden away
      //So the user doesn't have to worry about things like increasing the heat too high
      if(_temp < 400){
          _temp += 10;
      }
    },
    turnDownTemperature: function(){
      //Or decreasing the temperature too low
      _temp -= 10;
      if(_temp < 0){
        _temp = 0;
      }
    },
    getTemperature: function(){
      //we can use getters to determine what the outside world can see
      return _temp;
    },
    toast: function(item) {

      //once again the user doesn't have to worry about the internals of this function.
      //they just call toast and it toasts the object.
      //they don't have to worry about managing timers or temperatures, it has been abstracted away.

      initTempAndTime();
      if(isToastable()){
          console.log('toasting ' + item.getName() + ' for ' + _time + ' seconds.');
          item.cook(_time, _temp);
      }else {
        console.error('Toaster is not hot enough to toast');
      }
    },
    getTime:function(){
      return _time;
    },
    //we can use setters to determine what the outside world can modify
    //after all, we don't want them to be able to set our object into an invalid state
    //or override expected behaviors.
    setTime: function(time){
      //we can even error check so the outside world doesn't have to worry about it.
      if(typeof time === 'number'){
        _time = time;
      }else{
        console.error('NOT A NUMBER YOU IMBACILE');
      }
    }
  };
};