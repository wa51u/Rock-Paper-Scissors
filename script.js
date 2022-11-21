
let playerScore = 0 
let computerScore = 0

    let playerSelection 
    let computerSelection 

function getUserChoice(){
    let userChoice =""
   userChoice = prompt("Please choose your weapon");
   userChoice = userChoice.toLowerCase()
   console.log("'" + userChoice+"'")
   if  (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    return userChoice;
   }else{
    
    alert("wrong weapon, bye bye");
    return userChoice = ("STOP")
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


 function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection){
            playerScore = playerScore + 1
            computerScore = computerScore + 1
    return ("Win-Win" + playerSelection)
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") ){
            playerScore = playerScore + 1
            alert ("player win battle!\n" + playerSelection + " destroy " + computerSelection)
        }
    else {
        computerScore = computerScore + 1
        alert ("player loose battle!\n" + playerSelection + " is destroyed by: " + computerSelection)
    }
let a

    }

    function game(){
        
        for (let i = 0; i < 5; i++) {
            playerSelection = getUserChoice();
            if (playerSelection == "STOP"){
                return
            }
            computerSelection = getComputerChoice();
        
            playRound(playerSelection,computerSelection);
        alert("Round "+ (i + 1)  +" Score:\nPlayer Score: " + playerScore + " Computer score: " + computerScore);
        }
        if (playerScore > computerScore) {
            let warResult = "WIN"
        } else if (playerScore == computerScore) {
                warResult = "DRAW"
        }
        else {
            "LOOSE"
        }

        alert("player: " + warResult + " with computer\nPlayer Score: " + playerScore + " Computer score: " + computerScore);
    }
let avf

console.log(playerSelection)
console.log(computerSelection)
console.log("player score " + playerScore)
console.log("comp score " + computerScore)
console.log(game())
console.log("player score " + playerScore)
console.log("comp score  " + computerScore)