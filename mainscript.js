// standard assets - moves, results, outcomes
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
let gameOver = false;

// reset game parameters
const resetRPS = () => {
    score = [0, 0];
    playerScore.textContent = score[0];
    computerScore.textContent = score[1];
    gameNumber = 0;
    tally = [];
    gamesTally.textContent = "";
    gameOver = false;
    playerMove.textContent = "d -_- b";
    computerMove.textContent = "d -_- b";
    announceResult.textContent = "Game ready";
    winner.textContent = "First to 5, wins the game!";
    gamesTally.textContent = "Start the game to see the wins/losses history.";
}


// obtain random computer choice
function getComputerChoice () {
    let compMove = moves[Math.floor(Math.random()*moves.length)];
    return compMove;
}


// play a round of RPS and provide gameResult
function playRound(playerSelection) {

    if (gameOver === true) {
        resetRPS();
        return;
    }

    let computerSelection = getComputerChoice();

    // ui: selected player and computer moves displayed
    playerMove.textContent = playerSelection;
    computerMove.textContent = computerSelection;

    if (playerSelection === computerSelection) {
        resultOutcome = (results[0] + outcomes["tie"]);
        gameResult(resultOutcome);
        return resultOutcome;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        score[0]++;
        resultOutcome = (results[1] + outcomes[playerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    } else if (playerSelection === "rock") {
        score[1]++;
        resultOutcome = (results[2] + outcomes[computerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        score[0]++;
        resultOutcome = (results[1] + outcomes[playerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    } else if (playerSelection === "paper") {
        score[1]++;
        resultOutcome = (results[2] + outcomes[computerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        score[0]++;
        resultOutcome = (results[1] + outcomes[playerSelection]);
        gameResult(resultOutcome);
        return resultOutcome;
    } else if (playerSelection === "scissors") {
        score[1]++;
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
const gamesTally = document.querySelector('#gamesTally');
const winner = document.querySelector('#winner');
const reset = document.querySelector('#reset');


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
    tally.push(resultOutcome);
    gameNumber++;
    gamesTally.textContent = tallyUpdate (tally, gameNumber);
    playerScore.textContent = score[0];
    computerScore.textContent = score[1];
    console.log("Game Number " + gameNumber + " - Score " + score);
    // ui: announce winner
    if (score[0] === 5 || score[1] === 5) {
        if (score[0] === 5) {
        winner.textContent = "Game Over | YOU WON!!"
        } else {
            winner.textContent = "Game Over | YOU LOST!!"
        }
        gameOver = true;
    }
}

// ui: update tally
function tallyUpdate (tally, gameNumber) {
    let output = "";
    for (let i = gameNumber -1; i >= 0; i--) {
        output += "Game " + (i + 1) + " - " + tally[i] + " |\n";
    }
    return output;
}


// ui: reset button
reset.addEventListener('click', () => resetRPS());