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

    console.log("Computer selected " + compMove);
    return compMove;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("Player selected " + playerSelection);

    if (playerSelection === computerSelection) {
        return "Tied";
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Win";
    } else {
        return "Lose";
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "Win";
    } else {
        return "Lose";
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Win";
    } else {
        return "Lose";
    }
}

const playerSelection = "ScisSoRS";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));