import Board from './board';

class Game {
  constructor() {
    this.board = new Board();
  }

  getPiece(pos) {
    return this.board.getPiece(pos);
  }

  movePiece(oldPos, newPos) {
    this.board.move(oldPos, newPos);
  }
}

export default Game;
