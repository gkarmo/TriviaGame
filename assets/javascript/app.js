var gameDiv = $("#game-body");

var questionsObj = {
    q1: "Longest win streak by any professional team?",
    q2: "NBA player with the most championship rings?",
    q3: "Most goals scored in a single hockey game",
    q4: "Longest soccer goal made?"

}

// var questionsArr = ["Longest win streak by any professional team?", "NBA player with the most championship rings?", "Most goals scored in a single hockey game", "Longest soccer goal made?"];

$(document).ready(function(){

    $("#start").on("click", function(){

        $("#start").hide();

        var question1 = $("<p>" + questionsObj.q1 + "</p>"); 
        var question2 = $("<p>" + questionsObj.q2 + "</p>");
        var question3 = $("<p>" + questionsObj.q3 + "</p>");
        var question4 = $("<p>" + questionsObj.q4 + "</p>");
        
        gameDiv.append(question1);
        gameDiv.append(question2);
        gameDiv.append(question3);
        gameDiv.append(question4);


        

    });

});