// A function called "intersection" that takes two arrays as arguments and returns an array of the items that are
// in both input arrays. For example intersection([1,2,3], [1,3,5]) should return [1,3].
// A function caleed "union" that takes two arrays as arguments and returns an array of items from both arrays.
// For example, union([1,2,3], [4,5,6]) should return [1,2,3,4,5,6].
// A function caleed "zip" that takes two arrays as arguments and returns an array of items from both arrays
// combined in an alternating manner. For example, zip([1,2,3], [4,5,6]) should return [1,4,2,5,3,6].

//first answer--------------------------------------
function intersection(a, b)
{
  var result = new Array(); //array to be pushed to
  while( a.length > 0 && b.length > 0 ) //I will shift out all results into nowhere land or onto the new array
  {
     if      (a[0] < b[0] ){ a.shift(); } //if A is different than be then scrap it
     else if (a[0] > b[0] ){ b.shift(); } //if B is different than A then scrap it
     else  {
       result.push(a.shift());
       b.shift();
     }
  }

  return result;
}
console.log(intersection([1,2,3,4,5,6], [1, 3, 5]))
//solution number 2-------------------------------------
//saundies answer
function intersection(array1, array2) {
  var newArray = [];
  array1.forEach(function(x) {
    for (var i=0; i< array2.length; i++){
      if (array2[i] === x) {
        newArray.push(array2[i]);
      }
    }
  })
  console.log(newArray);
}

//second anser-------------------------------------------
function union(a, b)
{
  var result = a.concat(b);//add array b onto array a. simple as that
  console.log(result);

}
union([1,2,3], [4,5,6]);

//solution number 2-------------------------------------
//eithans answer
function union(array1, array2){
  var bothArray = [array1, array2].reduce(
    function(prev,curr) {
      return prev.concat(curr);

    });
  console.log(bothArray);
}
//third answer-------------------------------------------
function zip(a, b)
{
  var result = new Array();
  while( a.length > 0 && b.length > 0 ) //this was a little easier than interesction where to zip the arrays up in order of array i
  //ran a while loop through them, similar to 1, but this time pushed all of them one after the other onto the new array rather than be selective.
  {

       result.push(a.shift());
       result.push(b.shift());
     }


  return result;
}

console.log(zip([1,2,3], [4,5,6]));
//solution number 2-------------------------------------
//ians solution
function zip(arr1, arr2){
  var finalArr = [];
  var length;
  if (arr1.length > arr2.length){
    length = arr1.length;

  }else {
    length = arr2.length;

  }
  for (var i =0; i < length; i++){
    var elem1 = arr1.shift();
    var elem2 = arr2.shift();
    if (arr1.length >0 && arr2.length > 0){
      finalArr.push(elem1, elem2);

    }else if (arr1.length > 0 || arr2.length === 0){
      finalArry.push(elem1);

    }else if (arr1.length === 0 || arr2.length > 0){
      finalArr.push(elem2);

    }else {
      finalArry.push(elem2);
    }
  }
  return finalArr;
}
console.log(zip[1,2,3,4,5,5,6,7], [8,10,11,12,14,15,15,16,17])
