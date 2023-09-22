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


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    console.log("\nPlayer selected " + playerSelection);
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
    }
}


// run game via console
function logPlayRound(playerSelection) {
    let round = playRound(playerSelection);
    console.log(round);
    return round;
}


// RPS-UI controls

const btns = document.querySelectorAll('#btn');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.textContent.toLowerCase();
        logPlayRound(playerSelection);
    });
});
