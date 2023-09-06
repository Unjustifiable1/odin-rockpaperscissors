let moves = ["rock", "paper", "scissors"];

function getComputerChoice () {
    let compMove = moves[Math.floor(Math.random()*moves.length)];

    console.log(compMove);
    return compMove;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();


}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));