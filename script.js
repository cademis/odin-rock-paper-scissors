// create a function called getComputerChoice that will randomly return either Rock Paper or Scissors

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
}

// create a function that plays a single round.
// use the perameters playerSelection and computerSelection.
// declare the winner with "You Lose! Paper beats Rock".
// Make the playerSelection parameter case sensitive
// return the results of the function call

function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Loose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Its a Tie!";
  } else {
    return "You wrote something other than rock and i havent coded that in yet";
  }
}

// write a new fucntion called game()
// use the previous function inside of the one to play a 5 round game that keeps score and reports a winner or loser at the end
// display the results via console.log

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let thisRound = round(
      prompt("rock paper or scissors"),
      getComputerChoice()
    );
    console.log(thisRound);
    if (thisRound === "You Win! Rock beats Scissors") {
      playerScore = playerScore + 1;
    } else if (thisRound === "You Loose! Paper beats Rock") {
      computerScore = computerScore + 1;
    }
  }
}

game();

function winner() {
  if (playerScore > computerScore) {
    return "You win overall! ";
  } else if (computerScore > playerScore) {
    return "You lose overall. ";
  } else {
    return "Its a draw. ";
  }
}

console.log(
  winner() +
    "Playerscore: " +
    playerScore +
    " & ComputerScore: " +
    computerScore
);
