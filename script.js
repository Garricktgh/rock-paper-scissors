let gameMode;

let choices = {
  rock: {name: "rock", wins: "scissors"},
  paper: {name: "paper", wins: "rock"},
  scissors: {name: "scissors", wins: "paper"}
}

const computerPick = () => {
  let randomPick = Math.floor(Math.random() * 3) + 1;
  if (randomPick === 1) { 
    return computerChoice = "rock";
  } else if (randomPick === 2) {
    return computerChoice = "paper";
  } else {
    return computerChoice = "scissors";
  }
}

const playerVsCom = () => {
  let playerChoice = prompt("enter rock/paper/scissors");
  let computerChoice = computerPick();
  console.log(`computer picks ${computerChoice}`);
  console.log(`player picks ${playerChoice}`);
  checkWin(playerChoice, computerChoice);
}

const comVsCom = () => {
  let computerOne = computerPick();
  console.log(`computer one picks ${computerOne}`);
  let computerTwo = computerPick();
  console.log(`computer two picks ${computerTwo}`);
  checkWin(computerOne, computerTwo);
}

const checkWin = (choiceOne, choiceTwo) => {
  if(choiceOne === choiceTwo) {
    alert("It is a tie!")
  } else {
    if (choices[choiceOne].wins === choiceTwo) {
      alert(`${choiceOne} wins`);
    } else {
      alert(`${choiceTwo} wins`);
    }
  }
}
