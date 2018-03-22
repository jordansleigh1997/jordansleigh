$(function(){
  alert("Document Ready");

  $('#searchform').submit(function(){
    addItemToList("example item");
    return false;
  });
});

function additemtolist(item) {
  $('results').append("<li>" +item + "<li>");
}
