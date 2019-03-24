
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var gamestarted = false;
var level = 0 ;
$(document).keydown(function()
{

if(!gamestarted)
{
  nextSequence();
  gamestarted = true;
  $("h1").text("level " + level  );
}

});

function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomChosenColour);
  level++;
  $("h1").text("level " + level  );



  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

}

$(".btn").click(function(){

var userChosenColor = $(this).attr("id");
animatePress(userChosenColor);
playsound(userChosenColor);
userClickedPattern.push(userChosenColor);
console.log(userClickedPattern);
checkAnswer(userClickedPattern.length - 1);

});

function playsound(name)
{

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(color)
{

$("#"+color).addClass("pressed");
setTimeout(function()
{
$("#"+color).removeClass("pressed");

}, 100);

}

function checkAnswer(len)
{
if(userClickedPattern[len]==gamePattern[len])
{

  if(userClickedPattern.length == gamePattern.length)
  {
    setTimeout(function () {
             nextSequence();
           }, 1000);


  }



}
else
{
  $("h1").text(" Game Over, Press Any Key to Restart   "  );
playsound("wrong");
$("body").addClass("game-over");
setTimeout(function()
{
$("body").removeClass("game-over");

}, 200);
startover();

}


}

function startover()
{
level = 0 ;
gamePattern = [];
userClickedPattern = [];
gamestarted = false;


}
