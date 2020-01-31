//document ready command to load everything correctly
$(document).ready(function () {
    //variable array to hold the topics on which to query the giphy api and return results. Also holds input for new button created by users
    var topics = ["critical role", "dungeons and dragons", "star wars", "animals being jerks", "star trek", "cats", "alice cooper", "the muppets", "nat 20", "lord of the rings", "nintendo", "halloween", "gym fails", "spider-man"]
    //function to create buttons from the arary
    function createButton() {
        $("#button-goes-here").empty();
        for (i = 0; i < topics.length; i++) {
            var newButton = $("<button>").text(topics[i]);
            newButton.attr("data-name", topics[i]);
            newButton.addClass("btn btn-dark btn-lg m-1 font-weight-bold");
            $("#button-goes-here").append(newButton);
        }
    }
    createButton();
    //on click function linked to button presses
    $("button").on("click", function () {
        var topic = $(this).attr("data-name");
        //variable for the query URL to the GIPHY api with the index of the topic chosen
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FIUPsuC3wpsjInI9z00DHj7Zw7Ye60Q2&q=" + topic + "&limit=10&offset=0&rating=PG-13&lang=en";
        // console.log(queryURL);
        //ajax call to the API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //function to get the data from the API and inject it into the DOM
            var results = response.data;
            // console.log(response.data);
            for (i = 0; i < results.length; i++) {
                var buttonDiv = $("<div>");
                var rating = results[i].rating;
                var ratingText = $("<p>").text("Rating: " + rating);
                var newImage = $("<img>");

                ratingText.addClass("card header m-2 p-2 font-weight-bold")
                newImage.attr("src", results[i].images.fixed_height.url);
                newImage.addClass("card-body");
                buttonDiv.append(ratingText);
                buttonDiv.append(newImage);
                $("#gifs-appear-here").prepend(buttonDiv);




            }
        });
    });
});