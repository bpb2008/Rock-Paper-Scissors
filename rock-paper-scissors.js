const choiceField = document.querySelector('.choiceField');
const gameResult = document.querySelector('.gameResult');

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
} 

function playRound(playerSelection, computerSelection) {

    const playerSelction = choiceField.value.toLowerCase();
    if(playerSelection === computerSelection) {
        gameResult.textContent = 'We have a tie! Try again!';
        gameResult.style.backgroundColor = 'yellow';
    } else if((playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissors" && computerSelection === "paper")) {
                gameResult.textContent = 'You Win!';
                gameResult.style.backgroundColor = 'green';
              } else {
                gameResult.textContent = 'You Lose!'; 
                gameResult.style.backgroundColor = 'red';
              }
    

}



function game() {
    for (let i = 0; i < 5; i++) {

    }
}