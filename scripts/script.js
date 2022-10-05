function getComputerChoice() {
    let choiceList = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    
    return choiceList[choice];
}

let test = getComputerChoice();
console.log(test);