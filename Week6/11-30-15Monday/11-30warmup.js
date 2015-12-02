// var obj = {}
//
// var parseQueryString = function(string){
//   var newString = string.split('?');
//   newString2 = newString[1].split('&');
//  //console.log(newString2);
//   for (i=0; i < newString2.length; i++) {
//     newString3 = newString2[i].split('=')
//         console.log(newString3);
//     newString4 = newString3.push(obj);
//     console.log(obj);
//
//   }
//   // newString3 = newString2.split('=');
// //console.log(newString3);
// }

//Eithans answer
// function parseQueryString(urlStr) {
//   var query = {};
//   var splitter = urlStr.split('?');
//   var url= splitter.shift();
//   var keyValueArr = splitter[0].split('&');
//   keyValueArr.forEach(function(index){
//     var each = index.split('=');
//     //didnt get to write it all down quite.
//   })
// ;}

//other possible approaches

//One method to solve is with string.split
//however many tools can be used, like the replace method but replace with other symbols
//match is also a method thats possible to match up
//index can work for a per url parse basis
//send a single loop counting tokens for overall strign parse
//regex is something that can be used. //regular expression



parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")

//=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}

parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")

//=> {q: "dogs", sort: "top", t: "week"}
