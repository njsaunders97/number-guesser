let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomInteger = Math.floor(Math.random() * 10);
    return randomInteger;
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let humanResult = Math.abs(humanGuess - targetNumber);
    let computerResult = Math.abs(computerGuess - targetNumber);

    if(humanResult < computerResult || humanResult === 0) {
        return true
    } else {
        return false
    }
}

const updateScore = winner => {
    if(winner === "human") {
        humanScore++; 
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
