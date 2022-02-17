let playerScore = 0
let computerScore = 0

function computerPlay() {
    let optionsList = ["rock", "paper", "scissors"];
    let option = optionsList[Math.floor(Math.random() * optionsList.length)];
    return option
  }

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt('Rock, Paper or scissors?').toLowerCase();
    computerChoice = computerPlay()

    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++
        return alert(`Congrats! Rock beats scissors, you win! \n\nThe score is ${playerScore}-${computerScore}`)
    } else if (computerChoice == 'paper') {
        computerScore++
        return alert(`Sorry! Paper beats rock, you lose! \n\nThe score is ${playerScore}-${computerScore}`)
    } else if (computerChoice == 'rock') {
        return alert(`It\'s a tie! \n\nThe score is ${playerScore}-${computerScore}`)
    }

    if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++
        return alert(`Congrats! Paper beats rock, you win! \n\nThe score is ${playerScore}-${computerScore}`) 
    } else if (computerChoice == 'scissors') {
        computerScore++
        return alert(`Sorry! Scissors beats paper, you lose! \n\nThe score is ${playerScore}-${computerScore}`)
    } else if (computerChoice == 'paper') {
        return alert(`It\'s a tie! \n\nThe score is ${playerScore}-${computerScore}`)
    }

    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++
        return alert(`Congrats! Scissors beats paper, you win! \n\nThe score is ${playerScore}-${computerScore}`)
    } else if (computerChoice == 'rock') {
        computerScore++
        return alert(`Sorry! Rock beats scissors, you lose! \n\nThe score is ${playerScore}-${computerScore}`)
    } else if (computerChoice == 'scissors') {
        return alert(`It\'s a tie! \n\nThe score is ${playerScore}-${computerScore}`)
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }

    if (playerScore > computerScore) {
        alert(`You are a winner! \n\nThe final score was  ${playerScore}-${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`You are a loser! \n\nThe final score was ${playerScore}-${computerScore}`)
    } else {
        alert(`It\s a tie! \n\nThe final score was ${playerScore}-${computerScore}`)
    }

    playerScore = 0
    computerScore = 0
}
