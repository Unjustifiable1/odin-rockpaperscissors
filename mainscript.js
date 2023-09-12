const moves = ["rock", "paper", "scissors"];
const results = ["Tied! ", "You Win! ", "You Lose! "];
const outcomes = {
    tie: "Try again ;)",
    rock: "Rock crushes Scissors",
    paper: "Paper wraps Rock",
    scissors: "Scissors cut Paper"
}

function getComputerChoice () {
    let compMove = moves[Math.floor(Math.random()*moves.length)];

    console.log("Computer selected " + compMove);
    return compMove;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("Player selected " + playerSelection);

    if (playerSelection === computerSelection) {
        return (results[0] + outcomes["tie"]);
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return (results[1] + outcomes[playerSelection]);
    } else if (playerSelection === "rock") {
        return (results[2] + outcomes[computerSelection]);
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return (results[1] + outcomes[playerSelection]);
    } else if (playerSelection === "paper") {
        return (results[2] + outcomes[computerSelection]);
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return (results[1] + outcomes[playerSelection]);
    } else if (playerSelection === "scissors") {
        return (results[2] + outcomes[computerSelection]);
    }
}

let score = 0;

function game() {

}

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

// const playGame = game();