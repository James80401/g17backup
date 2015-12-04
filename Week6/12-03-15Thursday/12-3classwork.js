function Dog(legs, name){

    var _legs = legs;
    var _name = name;

    return {
        bark: function(){
            console.log("Woof!");
        },
        getLegs: function(){
            return _legs;
        },
        addLegs: function(numberOfLegsToAdd){
            _legs += numberOfLegsToAdd;
        },
        setName: function(updatedName){
            _name = updatedName;
        },
        getName: function(){
            return _name;
        }
    };
};

function GoldenRetreaver(legs, name){

  //call parent constructor
  //to get interface and assing it to var self
  var self = Dog(legs, name);

  //over ride bark property of the interface with different function value
  self.bark = function(){
    console.log('RAWR');
  };

  //return interface
  return self;
}
//---------------

function Beagle(legs, name) {


  var puppy = Dog(legs, name);


  puppy.getLegs = function() {
    console.log('getLegs');
  };


  return puppy;
}
//--------------

var fido = Dog(4, 'Fido');
var fefe = GoldenRetreaver(3, 'Fefe');
var fofo = Beagle(4, 'Fofo');
fido.bark(); // "Woof!"
fefe.bark(); // "Le bow."
fofo.getLegs();
