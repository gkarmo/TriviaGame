var gameDiv = $("#game-body");

var questionsArr = ["Longest win streak by any professional team?", "NBA player with the most championship rings?", "Most goals scored in a single hockey game", "Longest soccer goal made?"];

$(document).ready(function(){

    $("#start").on("click", function(){

        $("#start").hide();

        var questions = $("<p>");
        
        for (var i = 0; i < questionsArr.length; i++) {
            questions.text(questionsArr[i]);
            
        }


        gameDiv.append(questions);

    });

});