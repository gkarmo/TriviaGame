
var questionsArr = [{

        question: "Longest win streak by NBA team?",
        answers: ["San Antonio Spurs", "Miami Heat", "Los Angeles Lakers", "Golden State Warriors"],
        rightAnswer: "Los Angeles Lakers"
    },
    {
        question: "NBA player with the most championship rings?",
        answers: ["Michael Jordan", "Bill Russell", "Magic Johnson", "Kobe Bryant", "LeBron James"],
        rightAnswer: "Bill Russell"
    },
    {
        question: "Most goals scored in a single hockey game?",
        answers: [13,21,30,19,15],
        rightAnswer: 21
    },
    {
        question: "Longest soccer goal made?",
        answers: ["112 meters", "83 meters", "98 meters", "107 meters", "88 meters"],
        rightAnswer: "98 meters"
    }]
var gameDiv = $("#game-body");

var counter = 30;

var timer;

var clock;

correctAnswer = 0;

wrongAnswer = 0;

unanswered = 0;

function countdown() {

    counter--;

    $("#timer").text(counter);


    if (counter === 0) {

        resultPage();
     
    }
  }

  function startTime() {
    clock = setInterval(countdown, 1000);
  }


  function resultPage() {

    gameDiv.empty();

    var endMsg = $("<h3>");
    endMsg.text("Game Over Big Fella");

    var corAns = $("<p>");
    corAns.text("Correct Answer: " + correctAnswer);
    
    var wrongAns = $("<p>");
    wrongAns.text("Incorrect Answer: " + wrongAnswer);

    var unAns = $("<p>");
    unAns.text("Unaswered: " + unanswered);

    gameDiv.append(endMsg);
    gameDiv.append(corAns);
    gameDiv.append(wrongAns);
    gameDiv.append(unAns);

      
  }


$(document).ready(function(){


    $("#start").on("click", function(){

        $("#start").hide();

        countdown();
        startTime();

        for (var i = 0; i < questionsArr.length; i++) {
            var theQuestion = $("<h3>");
             gameDiv.append(theQuestion);
            theQuestion.text(questionsArr[i].question);
            for (var j = 0; j < questionsArr[i].answers.length; j++){
            var theAnswers = $('<input type="radio" name='+ questionsArr[i].answers[j] +' > '+ questionsArr[i].answers[j] + '</input>');
            //  theAnswers.text(questionsArr[i].answers);
           
            gameDiv.append(theAnswers);
            }
            
            
        }

    


        

       });

    });
