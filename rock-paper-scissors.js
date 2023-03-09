const choiceField = document.querySelector('.choiceField');
const gameResult = document.querySelector('.gameResult');

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
} 

function playRound(playerSelection, computerSelection) {

    const playerSelction = choiceField;
    if(playerSelection === computerSelection) {
        console.log('We have a tie! Try again!');
    
    } else if((playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissors" && computerSelection === "paper")) {
               console.log('You Win!');
            
              } else {
                console.log('You Lose!'); 
              }
    

}



function game() {
    for (let i = 0; i < 5; i++) {

    }
}