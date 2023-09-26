const moves = ["rock", "paper", "scissors"];
const results = ["Tied! ", "You Win! ", "You Lose! "];
const outcomes = {
    tie: "Try again ;)",
    rock: "Rock crushes Scissors",
    paper: "Paper wraps Rock",
    scissors: "Scissors cut Paper"
}


// default game parameters
let score = [0, 0];
let gameNumber = 0;
let tally = [];
const resetRPS = () => {
    score = [0, 0];
    gameNumber = 0;
    tally = [];
}


// obtain random computer choice
function getComputerChoice () {
    let compMove = moves[Math.floor(Math.random()*moves.length)];
    return compMove;
}


// play a round of RPS and provide gameResult
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    // ui: selected player and computer moves displayed
    playerMove.textContent = playerSelection;
    computerMove.textContent = computerSelection;

    console.log("\nPlayer selected " + playerSelection);
    console.log("Computer selected " + computerSelection);

    if (playerSelection === computerSelection) {
        resultOutcome = (results[0] + outcomes["tie"]);
        gameResult(resultOutcome);
        return resultOutcome;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        score++;
        resultOutcome = (results[1] + outcomes[playerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    } else if (playerSelection === "rock") {
        resultOutcome = (results[2] + outcomes[computerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        score++;
        resultOutcome = (results[1] + outcomes[playerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    } else if (playerSelection === "paper") {
        resultOutcome = (results[2] + outcomes[computerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        score++;
        resultOutcome = (results[1] + outcomes[playerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    } else if (playerSelection === "scissors") {
        resultOutcome = (results[2] + outcomes[computerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    }
}


// RPS-UI controls
const btns = document.querySelectorAll('#btn');
const playerMove = document.querySelector('#playerMove');
const computerMove = document.querySelector('#computerMove');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const announceResult = document.querySelector('#announceResult');


// ui: Game start and player move button controls
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.textContent.toLowerCase();
        playRound(playerSelection);
    });
});


// ui: announce result of individual game
function gameResult(resultOutcome) {
    announceResult.textContent = resultOutcome;
}