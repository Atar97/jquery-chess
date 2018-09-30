import Bishop from './pieces/bishop';
import King from './pieces/king';
import Knight from './pieces/knight';
import Pawn from './pieces/pawn';
import Queen from './pieces/queen';
import Rook from './pieces/Rook';
import NullPiece from './pieces/nullPiece';

class Board {
  constructor() {
    this.POWERPIECES = [Rook, Knight, Bishop, Queen,
      King, Bishop, Knight, Rook];
    this.board = [];
    for (let i = 0; i < 8; i++) {
      this.board.push([]);
    }
    this.buildBoard();
  }

  buildBoard() {
    this.makePowerRow(0, 'white');
    this.makePowerRow(7, 'black');
    this.placePawnsAndNulls();
  }

  placePawnsAndNulls() {
    for (let i = 0; i < 8; i++) {
      this.setPiece([1,i], new Pawn('white', [1,i], this));
      this.setPiece([6,i], new Pawn('black', [6,i], this));
      for (let k = 2; k < 6; k++) {
        this.board[k][i] = new NullPiece();
      }
    }
  }

  makePowerRow(rowIdx, color) {
    for (let i = 0; i < 8; i++) {
      this.setPiece([rowIdx, i], new this.POWERPIECES[i](color, null, this));
    }
  }

  movePiece(oldPos, newPos) {
    const piece = this.getPiece(oldPos);
    this.setPiece(newPos, piece);
    this.setPiece(oldPos, new NullPiece());
    return piece;
  }

  getPiece(pos) {
    return this.board[pos[0]][pos[1]];
  }

  setPiece(pos, piece) {
    this.board[pos[0]][pos[1]] = piece;
    piece.pos = pos;
  }

  move(oldPos, newPos) {
    const piece = this.getPiece(oldPos);
    if (!piece.color) {
      return false;
    } else if (piece.validMove(newPos)) {
      this.movePiece(oldPos, newPos);
      return true;
    }
    return false;
  }

}

export default Board;
