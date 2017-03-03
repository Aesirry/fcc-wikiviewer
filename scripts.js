$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var url = "https://en.wikipedia.org/w/api.php?&callback=?";
    $.getJSON(url, {
      action: 'query',
      format: 'json',
      list :'search',
      srsearch: $("input").val()
    })
      .done(function(data) {
        console.log(data);
        $("#results").empty();
        $.each(data.query.search, function(i, item) {
          var result = '<div class="panel panel-info">';
          result += '<a href="https://en.wikipedia.org/wiki/' + item.title + '" target="_blank">';
          result += '<div class="panel-heading">';;
          result += '<h2 class="panel-title">' + item.title + '</h2></div>';
          result += '<div class="panel-body">' + item.snippet + '</div>';
          result += '</a></div>';
          $("#results").append(result);
      });
    });
  });
});
