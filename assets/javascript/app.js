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
            newButton.addClass("gif-button btn btn-dark btn-lg m-1 font-weight-bold");
            $("#button-goes-here").append(newButton);
        }
    }
    createButton();

    function showGifs() {
        event.preventDefault();
        var topic = $(this).attr("data-name");
        //variable for the query URL to the GIPHY api with the index of the topic chosen
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FIUPsuC3wpsjInI9z00DHj7Zw7Ye60Q2&q=" + topic + "&limit=10&offset=0&rating=R&lang=en";
        //ajax call to the API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //function to get the data from the API and inject it into the DOM. drops 10 gifs of the chosen search into the container.
            var results = response.data;
            for (i = 0; i < results.length; i++) {
                var buttonDiv = $("<div>");
                var title = results[i].title;
                var rating = results[i].rating;
                var titleText = $("<p>").text("Title: " + title);
                var ratingText = $("<p>").text("Rating: " + rating);
                var newImage = $("<img>");
    
                console.log(response);
                titleText.addClass("card header m-2 p-2 font-weight-bold");
                ratingText.addClass("card header m-2 p-2 font-weight-bold");
                newImage.attr("src", results[i].images.fixed_height_still.url);
                newImage.attr("data-animate", results[i].images.fixed_height.url);
                newImage.attr("data-still", results[i].images.fixed_height_still.url);
                newImage.attr("data-state", "still");
                newImage.addClass("card-body");
                buttonDiv.append(titleText);
                buttonDiv.append(ratingText);
                buttonDiv.append(newImage);
                $("#gifs-appear-here").prepend(buttonDiv);
            }
        });

    }

    //on click function to process input text field to add a new gif grabber button
        $("#create-new-button").on("click", function () {
            var newTopic = $("#new-button").val().trim();
            if (newTopic == "") {
                return false;
            }
            topics.push(newTopic);
            createButton();
            $("#new-button").val("");
        });
    //on click to call the showGifs function to all buttons created
        $(document).on("click", ".gif-button", showGifs);

    //on click function to determine the state of each gif and add the ability to start and stop animation for each one
        $(document).on("click", ".card-body", function(){
            var state = $(this).attr("data-state");
            if (state == "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
    
    //on click function to delete the last added button from the page
        $("#remove-button").on("click", function(){
            topics.pop();
            createButton();
        })

});