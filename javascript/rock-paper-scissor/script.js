
const OPTIONS = ['rock', 'paper', 'scissor']
//Function to get a random choice betwen 'Rock' 'Paper' and 'Scissor'
function getComputerChoice (){ 
    //Generates a random number betwen 0,1, then it gets multiplied by the length of the OPTIONS list, then floor is aplied.
    random_number = Math.floor(Math.random()*OPTIONS.length)
    //Select the index based on the random number
    let computerChoice = OPTIONS[random_number]
    //Returns the choice
    return computerChoice
}
//Ask player for his choice
function getPlayerChoice(){
    playerChoice = prompt("Choose: 'Rock', 'Paper', 'Scissor'")
    return playerChoice
}
//Plays 1 round and then return a string declaring the winner of the round
function playRound (playerSelection, computerSelection){
    //Change player string so it can be in any case
    playerSelection = playerSelection.toLowerCase()
    //Draw logic
    if (playerSelection == computerSelection){
        return "You Draw!"
    }
    //Player choose Rock logic
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock"
        }
        else{
            return "You Win! Rock beats Scissor"
        }
    }
    //Player choose Paper logic
    else if (playerSelection == "paper"){
        if (computerSelection == "scissor"){
            return "You Lose! Scissor beats Paper"
        }
        else{
            return "You Win! Paper beats Rock"
        }
    }
    //Player choose Scissor logic
    else if (playerSelection == "scissor"){
        if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissor"
        }
        else{
            return "You Win! Scissor beats Paper"
        }
    }
    else{
        return 'Thats not an option'
    }
}
