var canines = function() {
  return {
  limbs : 4,
  human: false,
  fur: true,
  }
}
var Labridore = function(){
  var labridore = canines();
  labridore.size = 'medium';
  labridore.fun = 'lots';
  labridore.agression = 'low';
  return labridore;

}
var Chihuahua = function(){
  var chihuahua = canines();
  chiwawa.size = 'small';
  chiwawa.fun = 'low';
  chiwawa.agression = 'high';
  return chihuahua;
}
// var Beagle = function() {
//   var beagle = canines();
//
// }
console.log(Labridore());
