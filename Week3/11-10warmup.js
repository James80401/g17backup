var errorh = document.getElementsByClassName('error-high')[0]
var errorl = document.getElementsByClassName('error-low')[0]
var success = document.getElementsByClassName('success')[0]

errorh.style = 'color:red;font-weight:700;display:none';

errorl.style= 'color:red;display:none';

success.style = 'color:green;font-style:italic;display:none';

var getRandom = function(min, max){
  return Math.random() * (min, max) + min
}

var compnum = Math.floor(getRandom(1, 100));
console.log(compnum);
