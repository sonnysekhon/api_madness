$(function() {
  $("#search").on("submit", function (evt){
    evt.preventDefault();
    $("#results").empty();
    var searchInput = $("#search-input").val();
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      url: "https://api.instagram.com/v1/tags/" + searchInput + "/media/recent?client_id=e99ade1f77474c24b089c7cb2b43f7a6",
      success: function(obj) {
        obj.data.forEach(function(result) {
          var image = result.images.thumbnail.url;
          var caption = result.caption.text;
          $("#results").append("<img src='" + image + "' />"); 
        });
      }
    });
  });
});