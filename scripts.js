var muhquery;

function findArticle(query){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&grnnamespace=0&prop=extracts&exlimit=max&explaintext&exintro&gsrsearch=" + query + "&callback=?",
function(data) {
  for(var i = 0; i < 10; i++) {
    var stuff = $("<p></p>").text(data.search[i].snippet);
    $("#search-area").append(stuff);
  }
});
}

$(document).ready(function(){
  $("button").click(function() {
    query = $("#search").val();
    findArticle(query);
  });
});
