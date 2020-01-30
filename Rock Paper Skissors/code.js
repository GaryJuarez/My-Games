var pcChoice = randomNumber(1, 3);
var userChoice;
bigBrain();
function bigBrain(){
  if (pcChoice == 1)
    {setText("pcChose","Rock");}
  else if (pcChoice == 2)
    {setText("pcChose","Paper");}
  else
    {setText("pcChose","Scissors");}
  
}
function reset(){
  pcChoice = randomNumber(1, 3);
  bigBrain();
  setScreen("startScreen");
}
function winnerIs(){
  if (userChoice == 1)
  {
    if (pcChoice == 1)
     {setText("winnerIs",""); setText("winner", "Tie!");}
    if (pcChoice == 2)
      {setText("winner", "Opponent");}
    if (pcChoice == 3)
      {setText("winner", "You!");}
  }
  if (userChoice == 2)
  {
    if (pcChoice == 1)
      {setText("winner", "You!");}
    if (pcChoice == 2)
      {setText("winnerIs",""); setText("winner", "Tie!");}
    if (pcChoice == 3)
      {setText("winner", "Opponent");}
  }
  if (userChoice == 3)
  {
    if (pcChoice == 1)
      {setText("winner", "Opponent");}
    if (pcChoice == 2)
      {setText("winner", "You!");}
    if (pcChoice == 3)
      {setText("winnerIs",""); setText("winner", "Tie!");}
  }
}
//stuff that makes the buttons work

onEvent("playButton", "click", function(event) {
  setScreen("chooseScreen");
});
onEvent("rockButton", "click", function(event) {
  userChoice = 1;
  setText("youChose", "Rock");
  winnerIs()
  setScreen("resultScreen");
});
onEvent("paperButton", "click", function(event) {
  userChoice = 2;
  setText("youChose", "Paper");
  winnerIs()
  setScreen("resultScreen");
});
onEvent("scissorsButton", "click", function(event) {
  userChoice = 3;
  setText("youChose", "Scissors");
  winnerIs();
  setScreen("resultScreen");
});
onEvent("reset", "click", function(event) {
  reset();
});
