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

function getHumanChoice() {
    let choice;
    choice = choice.toLowerCase();
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

function playRound() {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    
    console.log(human + "vs" + computer);
    let result = gameLogic(human, computer);
    if(result == 1) {
        console.log("you won~!");
    } else if (result == 0) console.log("you lost! :(");
    else console.log("drrrrrrraw!");
    
    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameState;

    gameState = playRound();

    if(gameState == Result.WIN){
        humanScore++;
    } else if(gameState == Result.LOSE) computerScore++;

    console.log("your score: " + humanScore +"\ncomputer score: " + computerScore);
}

playGame();