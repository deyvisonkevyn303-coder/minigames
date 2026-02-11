// games/rockpaperscissors.js - Rock Paper Scissors Game

class RockPaperScissors {
  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];
    this.playerScore = 0;
    this.computerScore = 0;
    this.ties = 0;
  }

  getComputerChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  playRound(playerChoice) {
    const computerChoice = this.getComputerChoice();
    let result = '';

    if (playerChoice === computerChoice) {
      result = 'tie';
      this.ties++;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'win';
      this.playerScore++;
    } else {
      result = 'lose';
      this.computerScore++;
    }

    return {
      playerChoice,
      computerChoice,
      result,
      playerScore: this.playerScore,
      computerScore: this.computerScore,
      ties: this.ties
    };
  }

  resetGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.ties = 0;
  }

  getScore() {
    return {
      playerScore: this.playerScore,
      computerScore: this.computerScore,
      ties: this.ties
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissors;
}