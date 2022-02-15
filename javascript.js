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
        playerScore = playerScore + 1
        return alert(`Congrats, rock beats scissors, you win! \n Score:${playerScore}:${computerScore}`)
    } else if (computerChoice == 'paper') {
        computerScore = computerScore + 1
        return alert(`Sorry, paper beats rock, you lose! \n Score:${playerScore}:${computerScore}`)
    } else if (computerChoice == 'rock') {
        return alert(`It\'s a tie! \n Score:${playerScore}:${computerScore}`)
    }

    if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore = playerScore + 1
        return alert(`Congrats, paper beats rock, you win! \n Score:${playerScore}:${computerScore}`) 
    } else if (computerChoice == 'scissors') {
        computerScore = computerScore + 1
        return alert(`Sorry, scissors beats paper, you lose! \n Score:${playerScore}:${computerScore}`)
    } else if (computerChoice == 'paper') {
        return alert(`It\'s a tie! \n Score:${playerScore}:${computerScore}`)
    }

    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore = playerScore + 1
        return alert(`Congrats, scissors beats paper, you win! \n Score:${playerScore}:${computerScore}`)
    } else if (computerChoice == 'rock') {
        computerScore = computerScore + 1
        return alert(`Sorry, rock beats scissors, you lose! \n Score:${playerScore}:${computerScore}`)
    } else if (computerChoice == 'scissors') {
        return alert(`It\'s a tie! \n Score:${playerScore}:${computerScore}`)
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }

    if (playerScore > computerScore) {
        alert(`you are a winner! \n Score:${playerScore}:${computerScore}`)
    } else {
        alert(`You are a loser! \n Score:${playerScore}:${computerScore}`)
    }

    playerScore = 0
    computerScore = 0
}
