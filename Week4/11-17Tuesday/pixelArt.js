var $container = $('#container');
var $colorPicker = $('#palette');
// var pixel = document.querySelector('.pixel');
var $paintBrush = "";
//changes the color of paintbrush after clicking palette color

$colorPicker.on('click', function(event){
  // if (event.target.id === palette)
     $paintBrush = event.target.style.backgroundColor;
     console.log(event.target.style);
  //  console.log(event.target.id.style);
    //console.log(paintBrush);
    //console.log(paintBrush)
});

//main event to change color to whatever
  $container.on('click', function(event){

        var $pixel = $(event.target);
        $pixel.css('background-color')=$paintBrush;

});
// var prompt = prompt("Set the height and width of the canvas")
//
// for (i = 0, i < rows, i++){
//   var newRow = document.createElement("row");
//     for (j=0, j < colums, i++){
//         var newColumn = document.createElement("colum");
//     }
// }
