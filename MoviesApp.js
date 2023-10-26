$(document).ready(function() {
    function sortMovies(order, key) {
      let movies = $("#movie-list").children(".movie").get();
      movies.sort(function(a, b) {
        let aValue = $(a).find("span").text();
        let bValue = $(b).find("span").text();
        console.log(bValue);
        if (key === "title") {
          return aValue.localeCompare(bValue) * order;
        } else if (key === "rating") {
          let aRating = parseFloat(aValue.match(/Rating: (\d+(\.\d+)?)/)[1]);
          let bRating = parseFloat(bValue.match(/Rating: (\d+(\.\d+)?)/)[1]);
          return (aRating - bRating) * order;
        }
      });

      $("#movie-list").empty().append(movies);
    }

    $("#movie-form").submit(function(event) {
      event.preventDefault();

      let title = $("#title").val();
      let rating = $("#rating").val();

      if (title.length < 2) {
        alert("Title should have at least 2 characters.");
      } else {
        let movieElement = $("<div class='movie'><span>Title: " + title + " | Rating: " + rating + "</span><button class='remove-movie'>Remove</button></div>");
        $("#movie-list").append(movieElement);
        $("#title").val("");
        $("#rating").val("");
      }
    });

    $("#movie-list").on("click", ".remove-movie", function() {
      $(this).parent().remove();
    });

    $("#sort-title-asc").click(function(e) {
        e.preventDefault();
      sortMovies(1, "title");
    });

    $("#sort-title-desc").click(function(e) {
        e.preventDefault();
      sortMovies(-1, "title");
    });

    $("#sort-rating-asc").click(function(e) {
        e.preventDefault();
      sortMovies(1, "rating");
    });

    $("#sort-rating-desc").click(function(e) {
        e.preventDefault();
      sortMovies(-1, "rating");
    });
  });