$(document).on('ready', function(){

    var button = $('button')
    var movieName = $('#movieName');

  button.on('click', function(){

console.log('worked');
funtion addElement () {
  var mainBox=document.createElement('div');
  mainBox.id = 'mainBox';
  mainBox.class = col-md-4;
  var 
}
  $.ajax({
    url: 'http://www.omdbapi.com/?s='+movieName.val()+'&y=&plot=short&r=json',
    dataType:'jsonp',
    method: "Get",
    success: function(data){
      console.log(data);
    }
    })
  })
});
