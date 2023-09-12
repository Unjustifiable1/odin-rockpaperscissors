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
        return results[1];
    } else {
        return results[2];
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return results[1];
    } else {
        return results[2];
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return results[1];
    } else {
        return results[2];
    }
}

const playerSelection = "ScisSoRS";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));