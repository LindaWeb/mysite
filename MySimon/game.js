
var userClickedPattern = [];
var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      setTimeout(function () {
        nextSequence();
      }, 1000);
      started = true;
    }
  });


function nextSequence() {
    userClickedPattern = [];

     var randomNumber = Math.floor(Math.random() * 4);
     var randomChosenColour = (buttonColors[randomNumber]);

     gamePattern.push(randomChosenColour);
     $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
     playSound(randomChosenColour);
     
     $("#level-title").text("Level " + level);
    level++;
};

function playSound(name) {
    var audio = new Audio('sounds/' + name +'.mp3');
    audio.play(); 
};
function animatedPress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => { $("#" + currentColor).removeClass("pressed"); }, 200);
};

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    } else {
        console.log("wrong");
        
        var audio = new Audio('sounds/wrong.mp3');
        audio.play(); 
        $("body").addClass("game-over");
        setTimeout(() => { $("body").removeClass("game-over"); }, 1000);
        $("h1").html("Game Over! <br/> Press Any Key to Restart");
        startOver()
    };

    // Cheeter log
    console.log(userClickedPattern + ", userClickedPattern, ");
    console.log(gamePattern + ", gamePattern ");

};

$(".btn").click(function() {
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatedPress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
});


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
};


// console.log(gamePattern);
// console.log(userClickedPattern);

