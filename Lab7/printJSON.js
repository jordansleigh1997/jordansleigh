$(function(){
  alert("Document Ready");

  $('#searchform').submit(function(){
    var searchterms = $('#searchterms').val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=752efd3d" + searchterms;
  $.getJSON(url, function(jsondata){
    printJSON(jsondata);
  });
}

function printJSON(jsondata) {
  var normal = JSON.stringify(jsondata);
  $('resultsbox').append("<p>" + normal + "<p>");
}
