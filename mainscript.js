const moves = ["rock", "paper", "scissors"];
const results = ["Tied! ", "You Win! ", "You Lose! "];
const outcomes = {
    tie: "Try again ;)",
    rock: "Rock crushes Scissors",
    paper: "Paper wraps Rock",
    scissors: "Scissors cut Paper"
}

let score = 0;

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
        score++;
        return (results[1] + outcomes[playerSelection]);
    } else if (playerSelection === "rock") {
        return (results[2] + outcomes[computerSelection]);
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        score++;
        return (results[1] + outcomes[playerSelection]);
    } else if (playerSelection === "paper") {
        return (results[2] + outcomes[computerSelection]);
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        score++;
        return (results[1] + outcomes[playerSelection]);
    } else if (playerSelection === "scissors") {
        return (results[2] + outcomes[computerSelection]);
    }
}

function game() {
    for (let i = 1; i <= 5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice())); // switch between "playerSelection" and getPlayerChoice()
        console.log("Round " + i + " Score: " + score + "\n");
    }
    console.log("Final Score: " + score)
}

// const playerSelection = "rock";
function getPlayerChoice() {
    let playerSelection = prompt("Player choice? Rock, Paper or Scissors?", "Rock");
    return playerSelection;
}

// const computerSelection = getComputerChoice();

// const singleRound = playRound(playerSelection, computerSelection);
// console.log(singleRound);

const playGame = game();