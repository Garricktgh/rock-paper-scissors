let gameMode;

const choices = {
  rock: { name: "Rock", wins: "Scissors" },
  paper: { name: "Paper", wins: "Rock" },
  scissors: { name: "Scissors", wins: "Paper" }
}

const moveOptions = ["Rock", "Paper", "Scissors"];

let pVCButton = document.getElementById("pVC");
let cVCButton = document.getElementById("cVC");
let display = document.getElementById("display");
let displayTwo = document.getElementById("display2");
let playAgain = document.getElementById("playAgain")

const pickMode = () => {
  playAgain.style.display = "none";
  pVCButton.style.display = "inline-block";
  cVCButton.style.display = "inline-block";
  display.innerHTML = "Pick a mode";
  displayTwo.innerHTML = "";
}

const computerPick = () => {
  let randomPick = Math.floor( Math.random() * 3 ) + 1;
  if (randomPick === 1) { 
    return computerChoice = "rock";
  } else if (randomPick === 2) {
    return computerChoice = "paper";
  } else {
    return computerChoice = "scissors";
  }
}

const playerVsCom = () => {
  gameMode = 0;
  //hide play mode options
  pVCButton.style.display = "none";
  cVCButton.style.display = "none";
  display.innerHTML = "Player VS Computer";
  displayTwo.innerHTML = "Choose your move";
  playerOptions();
}

//create buttons for player moves
const playerOptions = () => {
  let playerOptions = document.createElement('div');
  playerOptions.setAttribute('id', 'playerOptions')
  for ( let i = 0, len = moveOptions.length; i < len; i++ ) {
    let playerMove = document.createElement('button');
    playerMove.innerHTML = moveOptions[i];
    playerMove.addEventListener('click', playerPick)
    playerOptions.appendChild(playerMove);
  }
  displayTwo.appendChild(playerOptions)
}

//when player picks a move
const playerPick = (event) => {
  let playerChoice = event.target.innerHTML.toLowerCase();
  let computerChoice = computerPick();
  checkWin(playerChoice, computerChoice);
}

//computer vs computer
const comVsCom = () => {
  pVCButton.style.display = "none";
  cVCButton.style.display = "none";
  gameMode = 1;
  let computerOne = computerPick();
  let computerTwo = computerPick();
  checkWin(computerOne, computerTwo);
}

//check win condition
const checkWin = (choiceOne, choiceTwo) => {
  if (gameMode === 0 ) {
    display.innerHTML = `Player picks ${choices[choiceOne].name}! Computer picks ${choices[choiceTwo].name}!`;
  } else {
    display.innerHTML = `Computer 1 picks ${choices[choiceOne].name}! Computer 2 picks ${choices[choiceTwo].name}!`;
  }
  if (choiceOne === choiceTwo) {
      displayTwo.innerHTML = "It is a tie!";
    } else {
    if (choices[choiceOne].wins.toLowerCase() === choiceTwo.toLowerCase()) {
      displayTwo.innerHTML = `${choices[choiceOne].name} wins!`;
    } else {
      displayTwo.innerHTML = `${choices[choiceTwo].name} wins!`;
    }
  }
  playAgain.style.display = "inline-block";
}

//add event listener to buttons
pVCButton.addEventListener("click", playerVsCom);
cVCButton.addEventListener("click", comVsCom);
playAgain.addEventListener("click", pickMode);
window.addEventListener('load', pickMode);