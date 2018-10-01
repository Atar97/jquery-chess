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
    this.inCheck = false;
  }

  getPiece(pos) {
    return this.board.getPiece(pos);
  }

  movePiece(oldPos, newPos) {
    if (this.currentPlayer.color === this.getPiece(oldPos).color) {
      if (this.board.move(oldPos, newPos)) {
        debugger;
        return this.toggleCurrentPlayer();
      }
    }
    return false;
  }

  inCheck() {
    const checkColor = Board.otherColor(this.currentPlayer.color);
    if (this.board.check(checkColor)) {
      this.inCheck = true;
    } else {
      this.inCheck = false;
    }
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
