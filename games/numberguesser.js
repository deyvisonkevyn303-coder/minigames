// games/numberguesser.js - Number Guessing Game

class NumberGuesser {
  constructor(maxNumber = 100) {
    this.maxNumber = maxNumber;
    this.secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    this.attempts = 0;
    this.guesses = [];
    this.gameActive = true;
  }

  makeGuess(guess) {
    if (!this.gameActive || guess < 1 || guess > this.maxNumber) {
      return { error: 'Invalid guess' };
    }

    this.attempts++;
    this.guesses.push(guess);

    if (guess === this.secretNumber) {
      this.gameActive = false;
      return {
        status: 'win',
        message: `Parabéns! Você adivinhou o número ${this.secretNumber} em ${this.attempts} tentativas!`,
        attempts: this.attempts
      };
    } else if (guess < this.secretNumber) {
      return {
        status: 'continue',
        message: 'O número secreto é maior!',
        hint: 'higher',
        attempts: this.attempts
      };
    } else {
      return {
        status: 'continue',
        message: 'O número secreto é menor!',
        hint: 'lower',
        attempts: this.attempts
      };
    }
  }

  giveUp() {
    this.gameActive = false;
    return {
      status: 'give_up',
      message: `O número secreto era ${this.secretNumber}`,
      secretNumber: this.secretNumber,
      attempts: this.attempts
    };
  }

  resetGame() {
    this.secretNumber = Math.floor(Math.random() * this.maxNumber) + 1;
    this.attempts = 0;
    this.guesses = [];
    this.gameActive = true;
  }

  getStats() {
    return {
      attempts: this.attempts,
      guesses: this.guesses,
      secretNumber: this.secretNumber
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NumberGuesser;
}