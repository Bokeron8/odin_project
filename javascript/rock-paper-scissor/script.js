
const OPTIONS = ['Rock', 'Paper', 'Scissor']
//Function to get a random choice betwen 'Rock' 'Paper' and 'Scissor'
function getComputerChoice (){ 
    //Generates a random number betwen 0,1, then it gets multiplied by the length of the OPTIONS list, then floor is aplied.
    random_number = Math.floor(Math.random()*OPTIONS.length)
    //Select the index based on the random number
    let computerChoice = OPTIONS[random_number]
    //Returns the choice
    return computerChoice
}