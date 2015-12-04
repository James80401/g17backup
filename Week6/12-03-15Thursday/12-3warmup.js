//a cpmstrictprs os a fimctopm tjat omstamtoates (creates) and object
// new is a keyword so every time we instantiate an obj we dont have to worry about refence issues
var Vector2 = function(x,y){
  this.x= x;
  this.y= y;
  this.subtract = function(){
    //needs to return a vector 2, not just an object literal with an x and y
    return {
      x:this.x-otherVector.x,
      y:this.y-otherVector.y
    };
  }
  this.add = function(){
    return {
    x:this.x+otherVector.x,
    y:this.y+otherVector.y
    }
  }
  this.multiply = function(){
    return {
    x:this.x*otherVector.x,
    y:this.y*otherVector.y
    }
  }
  this.divide = function(){
    return {
    x:this.x/otherVector.x,
    y:this.y/otherVector.y
    }
  }
  this.flip = function(){
    return {
    x:(this.x+otherVector.x)*-1,
    y:(this.y+otherVector.y)*-1
    }
  }


}
var myVector = new Vector2(10, 20);
//myVector.x works
//myVector.subtract it doesn't
var otherVector = new Vector2(5, 10);

var subtractedVector = myVector.subtract(otherVector);
  console.log(subtractedVector.x); // prints 5
  console.log(subtractedVector.y); // prints 10

var addedVector = myVector.add(otherVector);

console.log(addedVector.x);
console.log(addedVector.y);

var multipliedVector = myVector.multiply(otherVector);
console.log(multipliedVector.x);
console.log(multipliedVector.y);

var dividedVector = myVector.divide(otherVector);

console.log(dividedVector.x);
console.log(dividedVector.y);

var flipVector = myVector.flip(otherVector);
console.log(flipVector.x);
console.log(flipVector.y);
