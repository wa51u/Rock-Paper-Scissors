let playerScore = 0
let computerScore = 0
let playerSelection
let computerSelection
let userChoice = ""
let computerChoice = ""
let result = ""
let roundNr = 0
let round = ""
let warScore = ""
let warResult = ""

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        return "rock";
    } else if (random == 2) {
        return "paper";
    } else {
        return "scissors";
    };
};

function playRound(playerSelection, computerSelection) {
    computerChoice = computerSelection
    if (playerSelection == computerSelection) {
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
        return ("Win-Win" + playerSelection);
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore = playerScore + 1;
        result = ("player win battle!\n" + playerSelection + " destroy " + computerSelection);
    } else {
        computerScore = computerScore + 1;
        result = ("player loose battle!\n " + playerSelection + " is destroyed by: " + computerSelection);
    };
};

function game(button) {
    userChoice = (button);
    playRound(button, getComputerChoice());
    roundNr++;
    round = ("Round " + (roundNr) + " Score:\nPlayer Score: " + playerScore + " Computer score: " + computerScore);
    if (roundNr == 6){
        divBoard.style.visibility='hidden';

        window.location.reload();
        divBoard.style.visibility='hidden';
    }
    dashBoardRefresh();       
    if (roundNr == 5) {
        if (playerScore > computerScore) {
            warResult = "WIN";
        } else if (playerScore == computerScore) {
            warResult = "DRAW";
        } else {
            warResult = "LOOSE";
        }
        warScore = ("player: " + warResult + " with computer:\nPlayer Score: " + playerScore + " - Computer score: " + computerScore);
        dashBoardRefresh();
    };
};

buttons = document.querySelectorAll('button');
divCont = document.querySelector('#buttonsContainter');
divCont.style.display = "flex";
divCont.style.justifyContent = "center";
divCont.style.alignItems = "center";
divCont.style.gap = "20px";
divCont.style.margin = "20px";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});

divBoard = document.querySelector('#scoreBoard');
divBoard.style.display = "flex";
divBoard.style.flexDirection = "column";
divBoard.style.justifyContent = "center";
divBoard.style.alignItems = "center";

divSubBoard = document.createElement('div');
divSubBoard.style.backgroundColor = "red";
divSubBoard.style.margin = "20px";
divBoard.appendChild(divSubBoard);

divSubBoardTwo = document.createElement('div');
divSubBoardTwo.style.margin = "10px";
divBoard.appendChild(divSubBoardTwo);

divSubBoardThree = document.createElement('div');
divBoard.appendChild(divSubBoardThree);
divSubBoardFour = document.createElement('div');
divSubBoardFour.style.margin = "30px";
divSubBoardFour.style.fontSize = "17px";
divBoard.appendChild(divSubBoardFour);

function dashBoardRefresh() {
    divSubBoard.textContent = round;
    divSubBoardTwo.textContent = `player weapon: ${userChoice},   computer weapon: ${computerChoice}`;
    divSubBoardThree.textContent = result;
    divSubBoardFour.textContent = warScore;
}