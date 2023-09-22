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
    return compMove;
}

function getPlayerChoice() {
    let playerSelection = prompt("Player choice? Rock, Paper or Scissors?", "paper");
    return playerSelection.toLowerCase();
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log("Player selected " + playerSelection);
    console.log("Computer selected " + computerSelection);

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
    } else {
        return console.log("buggy");
    }
}


function logPlayRound () {
    let round = playRound();
    console.log(round);
    return round;
}


// RPS-UI controls

const btn = document.querySelector('#btn');
btn.addEventListener('click', logPlayRound);






// function game() {   // for console only game
//     for (let i = 1; i <= 5; i++){
//         console.log(playRound(getPlayerChoice(), getComputerChoice())); // switch between "playerSelection" and getPlayerChoice()
//         console.log("Round " + i + " Score: " + score + "\n");
//     }

//     if (score >= 3) {
//         console.log("Final Score: " + score + "\nYou Win!!");
//     } else {
//         console.log("Final Score: " + score + "\nComputer Wins!!");
//     }
    
// }
