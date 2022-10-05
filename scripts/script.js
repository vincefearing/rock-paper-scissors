function getComputerChoice() {
    let choiceList = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    
    return choiceList[choice];
}

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return 0;
        } else if (computerSelection === "scissors") {
            return 1;
        } else if (computerSelection === "rock") {
            return 2;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return 0;
        } else if (computerSelection === "rock") {
            return 1;
        } else if (computerSelection === "paper") {
            return 2;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return 0;
        } else if (computerSelection === "paper") {
            return 1;
        } else if (computerSelection === "scissors") {
            return 2;
        }
    }
}

function matchOutput(playerChoice, computerChoice, matchResult) {
    if (matchResult === 1) {
        return `You win, ${playerChoice} beats ${computerChoice}!`;
    } else if (matchResult === 0) {
        return `You lose, ${computerChoice} beats ${playerChoice}!`;
    } else if (matchResult === 2) {
        return "It's a tie!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; ++i) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let matchResult = playRound(playerChoice, computerChoice);
        if (matchResult === 0) {
            computerScore += 1;
        } else if (matchResult === 1) {
            playerScore += 1;
        } else if (matchResult === 2) {
            playerScore += 1;
            computerScore += 1
        }
        console.log(matchOutput(playerChoice, computerChoice, matchResult));
        console.log(`Score: \nPlayer ${playerScore} \nComputer ${computerScore}`)
    }
    console.log(`Final Score: \nPlayer ${playerScore} \nComputer ${computerScore}`)
    if (playerScore > computerScore) {
        console.log("Congrats you win!")
    } else if (computerScore > playerScore) {
        console.log("Better luck next time!")
    } else {
        console.log("Looks like we have a tie!")
    }
}

game();