// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
//
// The function should contain at least 1 argument per set.
//
// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17


// var calculate = function(arg1, arg2){
//   var result = 0;
//   var result2 = 0;
//   for (var i = 0; i< arg1.length; i++) {
//     result += arg1[i];
//   }
//   for (var i = 0; i< arg2.length; i++) {
//     result2 += arg2[i];
//   }
//   finalResult = result + result2;
//   console.log(finalResult);
// }
//
// calculate([1,2,3,4,5], [1,2,3,4,5])
//finised number 1--------------------------------------

// //class answer number 1
// function calculate(x, y);
//   var xArrayValues = [];
//   for (var key in arguemnts) {
//     xArrayValues.push(arguemtns[key]);
//   }
//   return function sum(z) {
//     var zArrayValues = [];
//     for (var key2 in arguemnts) {
//       zArrayValues.push(arguements[key2]);
//     }
//     var zTotal = zArrayValues.reduce(function(prev, next) {
//       return prev + next;
//     })
//     var xTotal = xArrayValues.reduce(function(prev, next){
//       return prev + next ;
//
//     });
//     return xTotal + zTotal;
//   });
// });//end class answer

//begin class answer 2
//
// funciton createFunctions(n) {
//   var callbacks = [];
//   var fx= function(x){
//     return function(){
//       return x;
//     };
//   };
// for (var i-0; i<n; i++){
//   callbacks.push(fx(i));
//   }
// }
// return callbacks;
// }

// still work on number 2-------------------------------

// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

// always = function(n){
//   return n;
// }
// var three = function(n){
//   console.log(always(n));
// }
// three(2);
//finshed number 3 -----------------------------------------------
function once(fn){
  var onceFlag = true;
    return function(args){
      if(onceFlag){
        onceFlag = false;
        return fn(args);
      }
      return undefined;
    };
}
//end jareds answer for number 4
