const States = Object.freeze({
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2
});

const Result = Object.freeze({
    LOSE: 0,
    WIN: 1,
    EVEN: 2
});

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(choice) {
    choice = choice.toString();
    switch (choice) {
        case "rock":
            return States.ROCK;
            break;
        case "paper":
            return States.PAPER;
            break;
        case "scissors":
            return States.SCISSORS;
            break;

        default:
            alert("invalid entry! try again");
            getHumanChoice();
            break;
    }
}

function gameLogic(humanChoice, computerChoice){
    switch (humanChoice) {
        case States.ROCK:
            switch (computerChoice) {
                case States.ROCK:
                    return Result.EVEN;
                    break;
                case States.PAPER:
                    return Result.LOSE;
                    break;
                case States.SCISSORS:
                    return Result.WIN;
                    break;
            }
            break;
        case States.PAPER:
            switch (computerChoice) {
                case States.ROCK:
                    return Result.WIN;
                    break;
                case States.PAPER:
                    return Result.EVEN;
                    break;
                case States.SCISSORS:
                    return Result.LOSE;
                    break;
            }
            break;
        case States.SCISSORS:
            switch (computerChoice) {
                case States.ROCK:
                    return Result.LOSE;
                    break;
                case States.PAPER:
                    return Result.WIN;
                    break;
                case States.SCISSORS:
                    return Result.EVEN;
                    break;
            }
            break;
    }
}
const divVs = document.querySelector(".vs");
const divResults = document.querySelector(".results");
const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener('click', (e) => playGame(e.target.id));

const playerTxt = document.createElement("span");
const vsTxt = document.createElement("span");
const computerTxt = document.createElement("span");

playerTxt.style.color = "cyan";
computerTxt.style.color = "pink";

divVs.appendChild(playerTxt);
divVs.appendChild(vsTxt);
divVs.appendChild(computerTxt);

function playRound(target) {
    let human = getHumanChoice(target);
    let computer = getComputerChoice();


    playerTxt.textContent = displayChoice(human);
    vsTxt.textContent = " vs ";
    computerTxt.textContent = displayChoice(computer);

    let result = gameLogic(human, computer);
    if(result == 1) {
        divResults.textContent = "you won~!";
        divResults.style.color = "green";
    } else if (result == 0) {
        divResults.textContent = "you lost! :(";
        divResults.style.color = "red";
    } else {
        divResults.textContent = "drrrrrrraw!";
        divResults.style.color = "yellow";
    }
    return result;
}

function displayChoice(choice) {
    switch (choice) {
        case States.ROCK:
            return "rock"; 
            break;
        case States.PAPER:
            return "paper";
            break;
        case States.SCISSORS:
            return "scissors";
            break;
    }
}

let humanScore = 0;
let computerScore = 0;
let gameState;
const scoreDiv = document.querySelector(".score");

function playGame(target) {

    gameState = playRound(target);

    if(gameState == Result.WIN){
        humanScore++;
    } else if(gameState == Result.LOSE) computerScore++;

    scoreDiv.innerText = "your score: " + humanScore +"\ncomputer score: " + computerScore;
}