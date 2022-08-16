
const OPTIONS = ['rock', 'paper', 'scissor']
let playerScore = 0;
let computerScore = 0;
//Get buttons elements
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');
//Get header elements
const playerScoreElement = document.getElementById('player-score');
const resultElement = document.getElementById('result');
const computerScoreElement = document.getElementById('computer-score');
//Add events listener
rockBtn.addEventListener('click', () => {
    game('rock');
  });
paperBtn.addEventListener('click', () => {
    game('paper');
  });
scissorBtn.addEventListener('click', () => {
    game('scissor');
  });
//Function to get a random choice betwen 'Rock' 'Paper' and 'Scissor'
function getComputerChoice (){ 
    //Generates a random number betwen 0,1, then it gets multiplied by the length of the OPTIONS list, then floor is aplied.
    random_number = Math.floor(Math.random()*OPTIONS.length)
    //Select the index based on the random number
    let computerChoice = OPTIONS[random_number]
    //Returns the choice
    return computerChoice
}

//Plays 1 round and then return a string declaring the winner of the round
function playRound (playerSelection, computerSelection){
    //Draw logic
    if (playerSelection == computerSelection){
        resultElement.textContent = "You Draw!"
    }
    //Player choose Rock logic
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            computerScore++;
            resultElement.textContent = "You Lose! Paper beats Rock"
        }
        else{
            playerScore++;
            resultElement.textContent = "You Win! Rock beats Scissor"
        }
    }
    //Player choose Paper logic
    else if (playerSelection == "paper"){
        if (computerSelection == "scissor"){
            computerScore++;
            resultElement.textContent = "You Lose! Scissor beats Paper"
        }
        else{
            playerScore++;
            resultElement.textContent = "You Win! Paper beats Rock"
        }
    }
    //Player choose Scissor logic
    else if (playerSelection == "scissor"){
        if (computerSelection == "rock"){
            computerScore++;
            resultElement.textContent = "You Lose! Rock beats Scissor"
        }
        else{
            playerScore++;
            resultElement.textContent = "You Win! Scissor beats Paper"
        }
    }
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;
}
function game(playerSelection){
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
}
    