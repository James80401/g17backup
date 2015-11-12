var button = document.querySelector('.button');
function handleMouse (event) {
    if (event.which == 1)
        console.log("Left button");
    else if (event.which == 2)
        console.log("Middle button");
    else if (event.which == 3)
        console.log("Right button");
}
button.addEventListener("mousedown", handleMouse);


addEventListener("click", function() {
    console.log("You clicked!");
});

var button = document.querySelector('.button');
button.addEventListener("click", function(){
    alert("SOMEONE CLICKED THE BUTTON!!");
});


var paragraphs = document.querySelectorAll('p');
function eventHandler (event) {
  console.log('p clicked!');
}
for (var i=0; i<paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', eventHandler)
}
