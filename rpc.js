const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
        // console.log(userInput)
    } else {
        console.log('only choose between rock, paper, scissors')
    }
}
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Game tied!'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!'
        } else {
            return 'You won!'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors'){
            return 'Computer won!'
        } else {
            return 'You won!'
        }
    }
    if (userChoice === 'scissors'){
        if ( computerChoice === 'rock'){
            return 'Computer won!'
        } else {
            return 'You won!'
        }
    }
    if (userChoice === 'bomb'){
        return 'You won!'
    }
}
const playGame = () => {
    const userChoice = getUserChoice( 'bomb')
    const computerChoice = getComputerChoice()
    console.log(userChoice)
    console.log(computerChoice)

    console.log(determineWinner(userChoice,computerChoice))
}

playGame()
