// console.log(myVariable)
//
//
// var george= "george"
//
// function fred() {
// 	var freddie = 'fred'
// 	freddie = george;
// 	console.log(freddie)
// }
//
// fred()
//
//
// console.log(myFirstFunction);
// myFirstFunction();
//
// console.log(mySecondFunction);
// console.log(myFirstVariable);
// //regular function
// function myFirstFunction() {
//     console.log("firstFunction");
// }
//
// console.log("some filler statement");
// //function expression
// var mySecondFunction = function() {
//     console.log("secondFunction");
// }
// //with the expression the hoisting assignment does not come with the variable to the top
// //in regualr function the entire definition gets moved to the top.
// mySecondFunction();
//
// var myFirstVariable = "50";
//
// console.log(myFirstVariable);
// console.log(unknownVariable);
// //end first example set
//
// //begin next demo
// function outerFunc(){
// 	console.log('outer funciton')
// 	return function() {
// 		console.log('I am the return function')
// 	}
// }
// var returnedFunction = outerFunc();
//
// console.log(returnedFunction);
//
//
// outerFunc()();
// //end next demo
//
//
// begin next demo
// 1. addGenerator taks an argument x
// 2. returns a function that console.logs x
// 3. run printme and run the function that it returns
//
// function addGenerator(x){
// 	return function() {
// 		console.log("This is the inner function")
// 	}
// }
// var printMe = addGenerator(1);
// printMe();
//
// //end next demo
//
// //new example
// function helloHigherOrder(){
// console.log('Hello');
// 	return function(){
// 	console.log('later');
// }();
// }
// helloHigherOrder();
//
// //end pt one
//
// //being second version of example
// function helloHigherOrder(){
// console.log('Hello');
// 	return function(){
// 	console.log('later');
// };
// }
// var y = helloHigherOrder();//print hello and returns function
//
// y();// prints goodbye
//
// //end second part
