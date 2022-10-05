function getComputerChoice() {
    let choiceList = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    
    return choiceList[choice];
}

function getPlayerChoice() {
    input = prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return 0;
        } else if (computerSelection === "scissors") {
            return 1;
        } else if (computerSelection === "rock") {
            return 3;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return 0;
        } else if (computerSelection === "rock") {
            return 1;
        } else if (computerSelection === "paper") {
            return 3;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return 0;
        } else if (computerSelection === "paper") {
            return 1;
        } else if (computerSelection === "scissors") {
            return 3;
        }
    }
}

function output(playerchoice, computerChoice, victory) {
    if (victory === 1) {
        return `You win, ${playerchoice} beats ${computerChoice}!`;
    } else if (victory === 0) {
        return `You lose, ${computerChoice} beats ${playerchoice}!`;
    } else if (victory === 3) {
        return "It's a tie!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; ++i) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playRound(playerchoice, computerChoice);
    }
}

let test = getComputerChoice();
console.log(test);