////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors’.");
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

    if(playerMove === computerMove) {
	winner = 'tie';
    }
    else if(playerMove === 'rock') {
	if(computerMove === 'scissors') {
	   winner = 'player';
        }
	else {
	   winner = 'computer';
	}
   }
    else if(playerMove === 'paper') {
	if(computerMove === 'rock') {
	   winner = 'player';
	}
	else {
	   winner = 'computer';
	}
   }
   return winner;
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  
  while((playerWins < 5) && (computerWins < 5)) {
      var playerMove = getInput();
      var computerMove = randomPlay();
      var winner = getWinner(playerMove, computerMove);
     
     
      if(winner === 'player') {
	  console.log(“Human wins”);
          playerWins += 1;
      }
      else if(winner === 'computer') {
	  console.log(“Computer wins”);
          computerWins += 1;
      }
      console.log("Your move was " + playerMove + ", and the computer chose " + computerMove + ".");
      console.log("At present, you have " + playerWins + " wins, and the computer has " + computerWins + " wins." + "\n");

  }
  return [playerWins, computerWins];
}

playToFive();




