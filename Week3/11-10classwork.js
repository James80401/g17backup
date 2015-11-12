// function add(x) {
//   return function(y) {
//     console.log(x+y)
//   }
// }
// var newFunction = add(10);
// newFunction(10);
// newFunction(5);
//


// function nums(){
//   var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   return function(y){
//     console.log(array1[y])
//   }
// }
// var number = newFunk();
// number(4);

//
// function closeMe() {
//   var count = 0;
//
//     return function() {
//        return count++;
//     }
// }
//
// var counter = closeMe();
// var secondCounter = closeMe();
//
// console.log(counter());                 // ?
// console.log(counter());                 // ?
// console.log(counter());                 // ?
// console.log(counter());                 // ?
// console.log("=========");
// console.log(secondCounter());           // ?
// console.log(secondCounter());           // ?
// console.log(secondCounter());           // ?
// console.log(secondCounter());           // ?
//
//
//
// function newFunk(num, Funky, superFunk){
//   if (num % 2 == 0){
//     Funky();
//   }
//     else {
//         superFunk();
//       };
//
// };
//
// function Funky(){
//   console.log('even')
// }
// function superFunk(){
//   console.log('odd')
// }
// newFunk(15, Funky, superFunk)
//
//
// function callback(num,funkOne,funkTwo){
//   if(num % 2 ===0){
//     funkOne();
//   } else {
//     funkTwo();
//   }
//
// }
//
// function funkOne(){
//   console.log('even')
// }
//
// function funkTwo(){
//   console.log('odd')
// }
//
//
// callback(1, funkOne, funkTwo)

//lets say we want to brint an array//
// var array = [1,2,3,4,5,6,7,8,9];
// var myFunc = (function(element, idx){
//     console.log(element);
//   };
// array.forEach(myFunc);
// array.forEach(function(element, idx)){
//     console.log(element);
//   });


//
// function stringMan(bool, funky, soulPower){
//     if (bool == true)
//       function funky(message){
//       console.log('success' + message)
//     }
//       else
//         function soulPower(error){
//           console.log('error' + error)
//         }
//
// }
//
// stringMan(1, funky, soulPower);
//
//
// function tearTheRoof(x) {
//   return function(y) {
//          console.log(x+y)
//   }
//  }
//  var offTheSucka = tearTheRoof(10);
//  offTheSucka(8);
//  offTheSucka(23);
