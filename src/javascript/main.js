//keep track of game mode
let gameMode;

//set buttons for the start of the game
function gameMenu() {
  displayModeSelect();
}

//when player VS computer is picked
function playerVsCom() {
  gameMode = 0;
  hidePlayModeOptions();
  displayPlayerOptions();
}

//when player picks a move
function playerPick(event) {
  let playerChoice = event.target.innerHTML;
  let computerChoice = computerPick();
  outCome(playerChoice, computerChoice);
}

//when computer vs computer is picked
function comVsCom() {
  gameMode = 1;
  hidePlayModeOptions();
  let computerOne = computerPick();
  let computerTwo = computerPick();
  outCome(computerOne, computerTwo);
}

//check win condition
function outCome(choiceOne, choiceTwo) {
  displayOutcome(choiceOne, choiceTwo)
}

//randomize computer choices
function computerPick() {
  //generate a random number from 0 to 2
  let random = Math.floor(Math.random() * 3);
  return choices.moveOptions[random];
}

//calls gameMenu when page loads 
window.addEventListener('load', gameMenu);


