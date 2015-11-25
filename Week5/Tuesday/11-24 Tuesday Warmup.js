
function subtractString(string) {
  return new Function('return ' + string)();
}

console.log( subtractString('10-20-30') ); // -40
//----------------------------------------------
function divideString(string) {
  return new Function('return ' + string)();
}

console.log( divideString('10/20') ); //.5
//----------------------------------------------
function addString(string) {
  return new Function('return ' + string)();
}

console.log( addString('10+20+30') ); //60
//----------------------------------------------------

function multiplyString(string) {
  return new Function('return ' + string)();
}

console.log( multiplyString('10*20*30') ); // 6000
//-----------------------------------------------
