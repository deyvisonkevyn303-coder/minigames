// games/memory.js - Memory Match Game

class MemoryGame {
  constructor() {
    this.cards = [];
    this.flipped = [];
    this.matched = [];
    this.moves = 0;
    this.score = 0;
    this.gameActive = true;
    this.initializeGame();
  }

  initializeGame() {
    const symbols = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎬', '🎤'];
    this.cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    this.flipped = Array(16).fill(false);
    this.matched = Array(16).fill(false);
  }

  flipCard(index) {
    if (!this.gameActive || this.flipped[index] || this.matched[index]) {
      return null;
    }

    if (this.flipped.filter(f => f).length >= 2) {
      return null;
    }

    this.flipped[index] = true;

    const flippedCards = this.flipped
      .map((f, i) => f ? i : null)
      .filter(i => i !== null);

    if (flippedCards.length === 2) {
      this.moves++;
      const [first, second] = flippedCards;

      if (this.cards[first] === this.cards[second]) {
        this.matched[first] = true;
        this.matched[second] = true;
        this.score += 10;

        if (this.matched.every(m => m)) {
          this.gameActive = false;
          return {
            status: 'win',
            score: this.score,
            moves: this.moves
          };
        }

        return { status: 'match', score: this.score, moves: this.moves };
      } else {
        setTimeout(() => {
          this.flipped[first] = false;
          this.flipped[second] = false;
        }, 1000);

        return { status: 'no_match', moves: this.moves };
      }
    }

    return { status: 'continue' };
  }

  getGameState() {
    return {
      cards: this.cards,
      flipped: this.flipped,
      matched: this.matched,
      score: this.score,
      moves: this.moves
    };
  }

  resetGame() {
    this.initializeGame();
    this.moves = 0;
    this.score = 0;
    this.gameActive = true;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MemoryGame;
}