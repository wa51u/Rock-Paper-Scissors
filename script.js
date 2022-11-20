
let playerScore = 0 
let computerScore = 0

function getUserChoice(){
   let userChoice = prompt("Please choose your weapon");
   userChoice = userChoice.toLowerCase()
   console.log("'" + userChoice+"'")
   if  (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    return userChoice;
   }else{
    alert("wrong weapon, bye bye");
   }
}


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)+1
    console.log("number" + random)
    if (random == 1) {
        return "rock";
    } else if (random == 2) {
    return "paper";
    } else {
    return "scissors"
    }
    }

    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();

 function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
    playerScore = playerScore + 1
    computerScore = computerScore + 1
    return ("Win-Win" + playerSelection)
    }

    }let a

console.log(playerSelection)
console.log(computerSelection)
console.log("player score " + playerScore)
console.log("comp score " + computerScore)
console.log(playRound(playerSelection,computerSelection))
console.log("player score " + playerScore)
console.log("comp score  " + computerScore)