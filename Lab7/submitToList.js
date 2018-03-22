$(function(){
  alert("Document Ready");

  $('#searchform').submit(function(){
    var searchterms = $('#searchterms').val();
    addItemToList("example item");
    return false;
  });
});

function additemtolist(item) {
  $('results').append("<li>" +item + "<li>");
}
