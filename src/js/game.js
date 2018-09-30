import Board from './board';
import Player from './player';

class Game {
  constructor() {
    this.board = new Board();
    this.players = [
      new Player('Austin', 'white'),
      new Player('Steve', 'black')
      ];
    this.currentPlayer = this.players[0];
  }

  getPiece(pos) {
    return this.board.getPiece(pos);
  }

  movePiece(oldPos, newPos) {
    if (this.currentPlayer.color === this.getPiece(oldPos).color) {
      if (this.board.move(oldPos, newPos)) {
        return this.toggleCurrentPlayer();
      }
    }
    return false;
  }

  toggleCurrentPlayer() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
    } else {
      this.currentPlayer = this.players[0];
    }
    return this.currentPlayer;
  }

}

export default Game;
