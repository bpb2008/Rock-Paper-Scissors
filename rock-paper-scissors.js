const choices = ["rock", "paper", "scissors"];

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
    document.getElementById("result_message").innerHTML = "You WIN! You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
   } else {
    document.getElementById("result_message").innerHTML = "You LOSE! You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
   }
}
