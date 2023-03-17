const choices = ["rock", "paper", "scissors"];
let playerScore = 0; 
let computerScore = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}  

function playRound(playerSelection) {
   console.log(playerSelection);
   const computerSelection = getComputerChoice(); 
   if (playerSelection === computerSelection) {
   document.getElementById("result_message").innerHTML = "We have a TIE!";
   } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore++; 
    document.getElementById("result_message").innerHTML = "You WIN! You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
          if (playerScore === 5) {
            document.getElementById("winner_message").innerHTML = "You won the game! Refresh to play again.";
          }

   } else {
    computerScore++;
    document.getElementById("result_message").innerHTML = "You LOSE! You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
   }
        if (computerScore === 5) {
            document.getElementById("loser_message").innerHTML = "The Computer won the game! Refresh to play again.";
        }
}

function updateScore() {
  document.getElementById('player_score').innerHTML = "Player: '${playerScore}'";
  document.getElementById('computer_score').innerHTML = "Computer: '${computerScore}'"; 
}
