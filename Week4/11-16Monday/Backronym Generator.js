//I ran out of time and wasnt able to finish.

var words = ['apple', 'back', 'cat', 'dog', 'elm', 'frank', 'gist', 'hold', 'inverse', 'james', 'kelly', 'law', 'mark', 'none', 'orphan', 'pyre', 'question', 'rack', 'string'
, 'trunk', 'universal', 'venus', 'will', 'xavier', 'youth', 'zelda']


function generator(string){

  var matchingwords = []

  var finalarray = []
//  split array
string = string.split("");
for (i = 0; i < string.length; i++);{
    if  i === words[j].charAt[0]
      words[j].push(matchingwords); //the word that matches into a new array then continue loop
} else{
  console.log("didn't work")
}
//i now have an array with all words matching the first letter of the stirng word
//now i want to take the new array and log a random number to it

//run a new for looop that will take array.math.random(0, array.length) and push it to a third array
//continue origional for loop until the entire string has been run though.

//take the third array with the words now in it, in order, and .join them all together, now it will be a string with each word.
};
generator('stringand')
//I ran out of time it never finished

//michelle's answer


var lotsOfWords = ['apple', 'bubble', 'chimp', 'dog', 'egg', 'fish', 'grinch', 'help', 'igloo', 'jungle', 'keep','loon',
'monkey', 'neptune', 'obvious', 'peach', 'queen', 'reach', 'step', 'tumble', 'uncle', 'vision', 'wig',
'xylephone', 'young', 'zebra']

function acroToSen(acro){
 var wordArray = [];
 var newWordArray = [];
 wordArray = acro.toLowerCase().split('');
 console.log(wordArray);
 for (var i = 0; i <= wordArray.length; i++){
   var acroLet = wordArray[i];
   //console.log(acroLet);
   for (var j = 0; j < lotsOfWords.length; j++){
     var letter = lotsOfWords[j].charAt(0);
     //console.log(letter);
     if (acroLet === letter){
       newWordArray.push(lotsOfWords[j]);
       //console.log(newWordArray);
     }
   }
 }
 var newSent = newWordArray.join(' ');
 return newSent;
}

console.log(acroToSen('HTTP'));
