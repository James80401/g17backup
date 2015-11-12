/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
//var button1 = document.querySelector('button');
var button1 = document.querySelector('#button1')
var stopbutton = document.querySelector('#stopButton');
var slowbutton = document.querySelector('#slowButton');
var gobutton = document.querySelector('#goButton');
var stoplight = document.querySelector('#stopLight');
var slowlight = document.querySelector('#slowLight');
var golight = document.querySelector('#goLight');
var bool = true;

stopbutton.addEventListener("click", function(){
      if (stopLight.style.backgroundColor==='black'){
        stopLight.style.backgroundColor='red';
        slowlight.style.backgroundColor='black';
        golight.style.backgroundColor='black';
      }else {
          stopLight.style.backgroundColor='black';
          slowlight.style.backgroundColor='black';
          golight.style.backgroundColor='black';
        }
      });
slowbutton.addEventListener("click", function(){
        if (slowLight.style.backgroundColor==='black'){
      stopLight.style.backgroundColor='black';
      slowLight.style.backgroundColor='yellow';
      golight.style.backgroundColor='black';
    } else {
      stopLight.style.backgroundColor='black';
      slowlight.style.backgroundColor='black';
      golight.style.backgroundColor='black';
    }
    });
gobutton.addEventListener("click", function(){
          if (goLight.style.backgroundColor==='black'){
        stopLight.style.backgroundColor='black';
        slowLight.style.backgroundColor='black';
        goLight.style.backgroundColor='green';
      }else{
        stopLight.style.backgroundColor='black';
        slowlight.style.backgroundColor='black';
        golight.style.backgroundColor='black';
      }
});
button1.addEventListener("click", function(){
        stopLight.style.backgroundColor='black';
        slowLight.style.backgroundColor='black';
        goLight.style.backgroundColor='black';
})
