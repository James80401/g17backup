//Entity this is the parent class
function Entity(){
 return {
     energy: 0,
     direction: 'n',
     originChar: 'O',
     act: function() {
   }
 };
}


//The wall element inherits from Entity
function Wall() {
 var self = new Entity();
 //override act
 delete self.energy;
 self.act = function(){
   //do nothing
 };
 return self;
}
// implement constructor
function Animal(){
 //inherit interface from parent
 var self = Entity();
 //override parents behavior
 self.originChar = 'A';
 self.direction = 's';
 self.energy = 50;

 //pass in the view object
 self.act = function(view){

   var returnObject;

   var food = view.find('*');

   //give us some brains
   //find an empty space near by
   var emptySpace = view.find(' ');
   //find another animal
   var otherAnimal = view.find('A');


   //if food exists
   if(food){
     returnObject = {
       type: "eat",
       direction: food
     };
   }else if(emptySpace && otherAnimal && self.energy>30){
     returnObject = {
       type: "reproduce",
       direction: food
     };
   }else if (emptySpace){
     self.direction = emptySpace;
     returnObject = {
         type: "move",
         direction: emptySpace
     };
   }

   return returnObject;

   return {
        type: "move",
        direction: this.direction
    };
 };
 return self;
}
function Herbivore(){
 //inherit interface from parent
 var self = Entity();
 //override parents behavior
 self.originChar = 'H';
 self.direction = 's';
 self.energy = 50;

 //pass in the view object
 self.act = function(view){

   var returnObject;

   var food = view.find('*');

   //give us some brains
   //find an empty space near by
   var emptySpace = view.find(' ');
   //find another animal
   var otherAnimal = view.find('A');


   //if food exists
   if(food){
     returnObject = {
       type: "eat",
       direction: food
     };
   }else if(emptySpace && otherAnimal && self.energy>30){
     returnObject = {
       type: "reproduce",
       direction: food
     };
   }else if (emptySpace){
     self.direction = emptySpace;
     returnObject = {
         type: "move",
         direction: emptySpace
     };
   }

   return returnObject;

   return {
        type: "move",
        direction: this.direction
    };
 };
 return self;
 }
function Predator(){
 //inherit interface from parent
 var self = Entity();
 //override parents behavior
 self.originChar = 'R';
 self.direction = 's';
 self.energy = 50;

 //pass in the view object
 self.act = function(view){

   var returnObject;

   var food = view.find('A');

   //give us some brains
   //find an empty space near by
   var emptySpace = view.find(' ');
   //find another animal
   var otherAnimal = view.find('R');


   //if food exists
   if(food){
     returnObject = {
       type: "eat",
       direction: food
     };
   }else if(emptySpace && otherAnimal && self.energy>30){
     returnObject = {
       type: "reproduce",
       direction: food
     };
   }else if (emptySpace){
     self.direction = emptySpace;
     returnObject = {
         type: "move",
         direction: emptySpace
     };
   }

   return returnObject;

   return {
        type: "move",
        direction: this.direction
    };
 };
 return self;
}

function Plant(){
 //inherit behavior from parent
 var self = new Entity();

 self.originChar = 'p';
 delete self.direction;
 self.energy = 1;

 //pass in the view object
 self.act = function(view){
   var returnAction = {
     type: "grow"
 };
   if(self.energy>20){

       var emptySpace = view.find(' ');
       if(emptySpace){
         returnAction = {
           type: 'reproduce',
           direction: emptySpace
         }
         };
   }
   return returnAction;
 };
 //return interface
 return self;

}


//uncomment entities from the legend as you implement them
var legend = {
 "#": Wall,
 "O": Entity,
 "A": Animal,
 "*": Plant,
 "R": Predator,
 "H": Herbivore
};

//to add an entity to the map replace an empty character with your entitycharacter
var map =
["############################",
"#####   R             ######",
"##       *     *          ##",
"#    ##    A          A   ##",
"#   *             ##       #",
"#          *      ##   *   #",
"#      *          ##       #",
"#           #   *          #",
"#   *       #         *    #",
"#      A    ##             #",
"## R      ###     R      ###",
"############################"];
var world = new LifelikeWorld(map, legend);

//Megaman EXECUTE! \o/
animateWorld(world);
