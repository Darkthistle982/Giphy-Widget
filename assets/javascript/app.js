//variable array to hold the topics on which to query the giphy api and return results. Also holds input for new button created by users
var topics = ["critical role", "dungeons and dragons", "star wars", "animals being jerks", "star trek", "cats", "alice cooper", "the muppets", "nat 20", "lord of the rings"]
//function to create buttons from the arary
function createButton() {
    for (i = 0; i < topics.length; i++) {
        var newButton = $("<button>").text(topics[i]);
        $("#button-goes-here").prepend(newButton);
    }
}
createButton();
//on click function linked to button presses
$("button").on("click", function () {
    //variable for the query URL to the GIPHY api with the index of the topic chosen
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FIUPsuC3wpsjInI9z00DHj7Zw7Ye60Q2&q=" + topics[i] + "&limit=10&offset=0&rating=PG-13&lang=en";
    //ajax call to the API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //function to get the data from the API and inject it into the DOM
        var results = response.data;
        for (i = 0; i < results.length; i++) {
            var buttonDiv = $("<div>");
            var rating = results[i].rating;
            var ratingText = $("<p>").text("Rating: " + rating);

        }
        





    });

});