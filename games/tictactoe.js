// games/tictactoe.js - Tic Tac Toe Game

class TicTacToe {
  constructor() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  makeMove(index) {
    if (this.board[index] !== '' || !this.gameActive) {
      return false;
    }

    this.board[index] = this.currentPlayer;
    
    if (this.checkWin()) {
      this.gameActive = false;
      return { status: 'win', winner: this.currentPlayer };
    }

    if (this.board.every(cell => cell !== '')) {
      this.gameActive = false;
      return { status: 'draw' };
    }

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    return { status: 'continue' };
  }

  checkWin() {
    return this.winningConditions.some(condition => {
      return condition.every(index => this.board[index] === this.currentPlayer);
    });
  }

  getBoard() {
    return this.board;
  }

  resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TicTacToe;
}