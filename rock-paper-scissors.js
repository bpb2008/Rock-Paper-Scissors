function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
} 

const playerSelection = prompt("Choose your weapon: rock, paper, or scissors.");

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        prompt('We have a TIE! Try again!');
    
    } else if((playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissors" && computerSelection === "paper")) {
               prompt('You WIN this round! Try again!');
            
              } else {
                console.log('You LOSE! Try again!'); 
              }
    

}



function game() {
    for (let i = 0; i < 5; i++) {

    }
}