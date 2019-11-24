//initialize variables for buttons
let display = document.getElementById("display");
let displayTwo = document.getElementById("display2");
//player vs computer button
let pVC = document.getElementById("pVC");
//computer vs computer button
let cVC = document.getElementById("cVC");
let playAgain = document.getElementById("playAgain");

//renders display for mode selection
function displayModeSelect() {
  playAgain.style.display = "none";
  pVC.style.display = "inline-block";
  cVC.style.display = "inline-block";
  display.innerHTML = "Pick a mode";
  displayTwo.innerHTML = "";
}

//hides buttons after mode is selected
function hidePlayModeOptions() {
  pVC.style.display = "none";
  cVC.style.display = "none";
}

//generate buttons for player moves
function displayPlayerOptions() {
  display.innerHTML = "Player VS Computer";
  displayTwo.innerHTML = "Choose your move";
  let playerOptions = document.createElement('div');
  playerOptions.setAttribute('id', 'playerOptions')
  for (let i = 0, len = choices.moveOptions.length; i < len; i++) {
    let playerMove = document.createElement('button');
    playerMove.innerHTML = choices.moveOptions[i];
    playerMove.addEventListener('click', playerPick)
    playerOptions.appendChild(playerMove);
  }
  displayTwo.appendChild(playerOptions)
}

//display the result
function displayOutcome(choiceOne, choiceTwo) {
  if (gameMode === 0 ) {
    display.innerHTML = `Player picks ${choiceOne}! Computer picks ${choiceTwo}!`;
  } else {
    display.innerHTML = `Computer 1 picks ${choiceOne}! Computer 2 picks ${choiceTwo}!`;
  }
  if (choiceOne === choiceTwo) {
      displayTwo.innerHTML = "It is a tie!";
  } else {
    if (choices[choiceOne].wins === choiceTwo) {
      displayTwo.innerHTML = `${choiceOne} wins!`;
    } else {
      displayTwo.innerHTML = `${choiceTwo} wins!`;
    }
  }
  playAgain.style.display = "inline-block";
}

//add event listener to buttons
pVC.addEventListener("click", playerVsCom);
cVC.addEventListener("click", comVsCom);
playAgain.addEventListener("click", gameMenu);