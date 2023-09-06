const moves = ["rock", "paper", "scissors"];
const results = ["Tied", "Win", "Lose"];
const outcomes = {
    tie: "Try again ;)",
    rock: "Rock crushes Scissors",
    paper: "Paper wraps Rock",
    scissors: "Scissors cut Paper"
}

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

// console.log(playRound(playerSelection, computerSelection));