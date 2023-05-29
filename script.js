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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "It's a Tie!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "It's a Tie!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "It's a Tie!";
    }
  } else {
    return "You wrote something other than rock, paper, or scissors... I haven't coded that in yet";
  }
}

// create a variable called buttons which selects all html elements with class=button
// add an onclick eventlistener to the button elements that calls a playRound function when it is clicked
// consolelog the result of playRound
// add a div to the body of an html page and add text

let buttons = document.querySelectorAll(".btn");

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let checkWhoWon;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gamesPlayed === 5) {
      document.querySelector(".results").innerHTML = ""; // clear the results
      gamesPlayed = 0; //reset games played
      playerScore = 0;
      computerScore = 0;
    }

    let thisRound = playRound(button.textContent, getComputerChoice());

    let div = document.createElement("div");

    div.textContent = thisRound;

    console.log(thisRound);

    gamesPlayed += 1;

    console.log(`games played: ${gamesPlayed}`);

    document.querySelector(".results").appendChild(div);

    if (thisRound.includes("You Win")) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }

    console.log(playerScore);
    console.log(computerScore);

    function checkYouWin(string) {
      if (string.includes("You Win!")) {
        return true;
      } else {
        return false;
      }
    }

    if (gamesPlayed === 5) {
      let h2 = document.createElement("h2");
      h2.textContent = `Game Over. Play Again? Player Score: ${playerScore} Computer Score: ${computerScore}`;
      document.querySelector(".results").appendChild(h2);
    }
  });
});

// function winner() {
//   if (playerScore > computerScore) {
//     return "You win overall! ";
//   } else if (computerScore > playerScore) {
//     return "You lose overall. ";
//   } else {
//     return "Its a draw. ";
//   }
// }

// console.log(
//   winner() +
//     "Playerscore: " +
//     playerScore +
//     " & ComputerScore: " +
//     computerScore
// );
