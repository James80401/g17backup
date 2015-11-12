//question 1
//project euler


// // Do the maths
// for(
//     var sum = 0, i = 1;
//     i < 1000;
//     !(i % 3 && i % 5) && (sum += i), i++
// );
// // Log the result
// console.log(sum);
//second answer for question 1
//
// var sum = 0;
// for (var i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//matts answer to question 1

// var sum = 0;
// for (var i =0; 1<1000; i++){
//   if (i%3===0|| i%5===0){
//     sum += i;
//   }
// }
// console.log(sum);
//end question 1

//begin question 2
//
// var limit = 4000000
//
// var sum = 0
// var a = 1
// var b = 1
//
// while (b < limit){
//   if (b % 2 === 0){
//      sum += b;
//    }
//   h = a + b
//   a = b
//   b = h
// }
// console.log(sum);

//trishas answer for quesiton 2
// var fArray = [1, 2, 3, 4, 5, 13, 21, 34, 55, 89]
// var x = 0;
// var y = 0
// while (x<4000000){
//   x = fArray[fArray.length - 1] + fArray[fArray.length - 2];
//   fArray.push(x);
// }
// fArray.forEach(evenAdd);
// function evenAdd(element) {
//   if (element % 2 === 0) {
//     y += element
//   }
// }
// console.log(fArray);
// console.log(y);

//accumulation patterns
// end answer 2

//begin quesiton 3
//
//
// function primeFactorization(num){
//   var root = Math.sqrt(num),
//   result = arguments[1] || [],  //get unnamed paremeter from recursive calls
//   x = 2;
//
//   if(num % x){//if not divisible by 2
//    x = 3;//assign first odd
//    while((num % x) && ((x = x + 2) < root)){}//iterate odds
//   }
//   //if no factor found then num is prime
//   x = (x <= root) ? x : num;
//   result.push(x);//push latest prime factor
//
//   //if num isn't prime factor make recursive call
//   return (x === num) ? result : primeFactorization(num/x, result) ;
// }
//
// console.log(primeFactorization(600851475143));
//

// end answer 3
