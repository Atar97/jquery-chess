const Board = require('./board.js');

class Game {
  constructor() {
    this.board = new Board();
  }

  getPiece(pos) {
    return this.board.getPiece(pos);
  }

  movePiece(oldPos, newPos) {
    this.board.movePiece(oldPos, newPos);
  }

  
}

module.exports = Game;
