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

// function getPlayerChoice() {
//     let playerSelection = prompt("Player choice? Rock, Paper or Scissors?", "paper");
//     return playerSelection.toLowerCase();
// }

// function playRound() {
//     let playerSelection = getPlayerChoice();
//     let computerSelection = getComputerChoice();

function playRound(playerSelection) {
    // let playerSelection = getPlayerChoice();
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
function logPlayRock() {
    let round = playRound('rock');
    console.log(round);
    return round;
}

function logPlayPaper() {
    let round = playRound('paper');
    console.log(round);
    return round;
}

function logPlayScissors() {
    let round = playRound('scissors');
    console.log(round);
    return round;
}

function logPlayRound(playerSelection) {
    let round = playRound(playerSelection);
    console.log(round);
    return round;
}


// RPS-UI controls

// const btnRock = document.querySelector('#btnRock');
// btnRock.addEventListener('click', logPlayRock);

// const btnPaper = document.querySelector('#btnPaper');
// btnPaper.addEventListener('click', logPlayPaper);

// const btnScissors = document.querySelector('#btnScissors');
// btnScissors.addEventListener('click', logPlayScissors);


const btns = document.querySelectorAll('#btn');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.textContent.toLowerCase();
        logPlayRound(playerSelection);
    });
});



// const clickButtons = document.querySelectorAll('#container Button');
// clickButtons.forEach((clickButton) => {
//     clickButton.addEventListener('click', () => {
//         alert(clickButton.textContent);
//     }); 
// });
