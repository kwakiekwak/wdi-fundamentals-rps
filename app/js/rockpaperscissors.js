////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors’.”);
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    if(playerMove === ‘rock’) {
	if(computerMove === ‘scissors’) {
	  winner = ‘player’;
	}
	else if(computerMove === ‘paper’) {
	  winner = ‘computer’;
	}
	else {
	  winner = ‘tie’;
	}
    }
	
    else if(playerMove === ‘paper’) {
	if(computerMove === ‘rock’) {
	  winner = ‘player’;
	}
	else if(computerMove === ‘scissors’) {
	  winner = ‘computer’;
	}
	else {
	  winner = ‘tie’;
	}
    }

    else if(playerMove === ‘scissors’) {
	if(computerMove === ‘paper’) {
	  winner = ‘player’;
	}
	else if(computerMove === ‘rock’) {
	  winner = ‘computer’;
	}
	else {
	  winner = ‘tie’;
	}
    }

	
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

// Added codes

    var winner = getWinner(playerMove, computerMove);
    
    while(playerWins <=5 || computerWins <= 5) {
	if(winner === ‘player’) {
	  playerWins += 1;
 	}
	else {
	  computerWins += 1;
	}
      console.log(‘Player chose ‘ + playerMove + ‘while computer chose ‘ + computerMove);
      console.log(‘The score is currently ‘ + playerWins + ’to ‘ + computerWins + ‘\n’);
     }

    return [playerWins, computerWins];
}

