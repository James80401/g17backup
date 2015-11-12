// function stringCapitalize(stringValue){
//   var newArray = stringValue.split(" ")
//       var val2 = [];
//   var secondaryArray = newArray.map(function(val){
//     var val1 = val[0];
//      val2 = val.substr(1, val.length)
//       return val1.toUpperCase();
//     });
//     return secondaryArray;
// }
//
//
// console.log(stringCapitalize('this is my string for the current problem'));
//
// alya answer
// function stringCapitalize(){
// var a = string.split(" ");
//   function letterCapitalize(word) {
//     var b = word.slice(1, string.length);
//     return word.chartAt(0).toUpperCase() + b;
//   }
//   return a.map(letterCapitalize);
// }


//keenan answer

function factorial(num){
  var arr = [];
  for (i=num; i > 1; i--){
    arr.push(i);
  }
  var fact = arr.reduce(multiply);
  return fact;
}
function multiply(num, currentValue){
  return num * currentValue;
}
console.log(factorial(20));
