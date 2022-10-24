let compWins = 0;
let playerWins = 0;
let ties = 0;

function getComputerChoice() {
    let choiceList = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    
    return choiceList[choice];
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (compWins < 5 && playerWins < 5) {
        calcResults(checkWinner(playerChoice, computerChoice));
    }
    if (playerWins === 5) {
        const container = document.querySelector('#results');
        const winner = document.createElement('p');
        winner.setAttribute('id', 'winner')
        winner.textContent = "You win! Good job!";
        container.appendChild(winner);
        //reset();
    } else if (compWins === 5) {
        const container = document.querySelector('#results');
        const winner = document.createElement('p');
        winner.setAttribute('id', 'winner')
        winner.textContent = "Computer wins! Nice try!";
        container.appendChild(winner);
    }
}

function reset() {
    compWins = 0;
    playerWins = 0;
    ties = 0;
    document.querySelector("#player-score").textContent = `Player: ${playerWins}`;
    document.querySelector("#comp-score").textContent = `Computer: ${compWins}`;
    document.querySelector("#ties").textContent = `Tie: ${ties}`;
    const winner = document.querySelector("#winner");
    winner.remove();
}

function checkWinner(playerSelection, computerSelection) {
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

function calcResults (result) {
    if (result === 0) {
        compWins++;
    } else if (result === 1) {
        playerWins++;
    } else if (result === 2) {
        ties++;
    }

    document.querySelector("#player-score").textContent = `Player: ${playerWins}`;
    document.querySelector("#comp-score").textContent = `Computer: ${compWins}`;
    document.querySelector("#ties").textContent = `Tie: ${ties}`;
}

function game() {
    let choices = document.querySelectorAll('.choice');
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            playRound(choice.id);
        })
    });
}

game();