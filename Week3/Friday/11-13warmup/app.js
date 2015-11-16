Synth.setSampleRate(44100);
    Synth.setVolume(1.0);

//create a var for each Element ID under keys

    var C = document.getElementById('c');
    var Csh = document.getElementById('cSh');
    var D = document.getElementById('d');
    var Dsh = document.getElementById('dSh');
    var E = document.getElementById('e');
    var Gsh = document.getElementById('gSh');
    var F = document.getElementById('f');
    var Fsh = document.getElementById('fSh');
    var G = document.getElementById('g');
    var A = document.getElementById('a');
    var Ash = document.getElementById('aSh');
    var B = document.getElementById('b');

    //create a piano instrument, other options are organ, edm or acoustic.
    var instrument = Synth.createInstrument('piano');
    var listener = addEventListener("onkeydown", function(){
  })
// by clicking on keys they will now play
//---------------------------------------
   var keys = addEventListener("click", function(){
    if (C === event.target){
    //play a 4th octave C note for 2 seconds.
    instrument.play('C', 4, 2);
}
//-----------------------------------------
    else if (Csh === event.target){
    //play a 4th octave C# note for 2 seconds.
    instrument.play('C#', 4, 2);
}
//-----------------------------------------
    else if (D === event.target){
    //play a 4th ocatve D note for 2 seconds.
    instrument.play('D', 4, 2);
}
//-----------------------------------------
else if (Dsh === event.target){
    //play a 4th octave D# note for 2 seconds.
    instrument.play('D#', 4, 2);
}
//-----------------------------------------
else if (E === event.target){
    //play a 4th octave E note for 2 seconds.
    instrument.play('E', 4, 2);
}
//-----------------------------------------
else if (Gsh === event.target){
    //play a 4th octave E# note for 2 seconds.
    instrument.play('G#', 4, 2);
}
//-----------------------------------------
else if (F === event.target){
    //play a 4th ocatve F note for 2 seconds.
    instrument.play('F', 4, 2);
}
//-----------------------------------------
else if (Fsh === event.target){
    //play a 4th octave F# note for 2 seconds.
    instrument.play('F#', 4, 2);
}
//-----------------------------------------
else if (G === event.target){
    //play a 4th octave G note for 2 seconds.
    instrument.play('G', 4, 2);
}
//-----------------------------------------
else if (A === event.target){
    //play a 4th octave A note for 2 seconds
    instrument.play('A', 4, 2);
}
//-----------------------------------------
else if (Ash === event.target){
    //play a 4th octave A# note for 2 seconds
    instrument.play('A#', 4, 2);
}
//-----------------------------------------
else if (B === event.target){
    //play a 4th ocateve B note for 2 seconds
    instrument.play('B', 4, 2);
}
//-----------------------------------------
});

// trisha answer
// window.addEventlistener('keydown', function(event)){
// find key identifier for the key to be played  //(a key identifier goes in the quotes)
//   else if (event.keyIdentifier === "" + "Shift")
// }


//trying to bind keys to event now
var keyboard = window.addEventlistener('keydown', function(event){

    if (event.keyIdentifier === "a")  {  //play a 4th octave C note for 2 seconds.
    instrument.play('C', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "a" + "Shift"){
    //play a 4th octave C# note for 2 seconds.
    instrument.play('C#', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "s"){
    //play a 4th ocatve D note for 2 seconds.
    instrument.play('D', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "s" + "Shift"){
    //play a 4th octave D# note for 2 seconds.
    instrument.play('D#', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "d"){
    //play a 4th octave E note for 2 seconds.
    instrument.play('E', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "d" + "Shift"){
    //play a 4th octave E# note for 2 seconds.
    instrument.play('G#', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "f"){
    //play a 4th ocatve F note for 2 seconds.
    instrument.play('F', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "f" + "Shift"){
    //play a 4th octave F# note for 2 seconds.
    instrument.play('F#', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "g"){
    //play a 4th octave G note for 2 seconds.
    instrument.play('G', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "h"){
    //play a 4th octave A note for 2 seconds
    instrument.play('A', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "h" + "Shift"){
    //play a 4th octave A# note for 2 seconds
    instrument.play('A#', 4, 2);
}
//-----------------------------------------
else if (event.keyIdentifier === "j"){
    //play a 4th ocateve B note for 2 seconds
    instrument.play('B', 4, 2);
}
//-----------------------------------------

    });
