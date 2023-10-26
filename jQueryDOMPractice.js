$(document).ready(function() {
    //Task 1
    console.log("Let's get ready to party with jQuery!");

    //Task 2
    $("article img").addClass("image-center");

    //Task 3
    $("article p:last").remove();

    //Task 4
    let randomSize = Math.floor(Math.random() * 101);
    $("#title").css("font-size", randomSize + "px");

    //Task 5
    $("aside ol").append("<li>This is a new list item.</li>");

    //Task 6
    $("aside").empty().append("<p>Sorry, the list has been removed.</p>");

    //Task 7
    $("input[type='number']").on("input",function() {
        let red = $(".form-control").eq(0).val();
        let green = $(".form-control").eq(1).val();
        let blue = $(".form-control").eq(2).val();
        $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
    });

    //Task 8
    $("article img").on("click", function() {
        $(this).remove();
    });
});


