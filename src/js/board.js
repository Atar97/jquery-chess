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
    this.sentinal = new NullPiece();
    this.board = [];
    for (let i = 0; i < 8; i++) {
      this.board.push([]);
    }
    this.buildBoard();
  }

  buildBoard() {
    for (let i = 0; i < 8; i++) {
      this.board[0][i] = new this.POWERPIECES[i]('white', [0,i], this);
      this.board[1][i] = new Pawn('white', [0,i], this);
      this.board[6][i] = new Pawn('black', [0,i], this);
      this.board[7][i] = new this.POWERPIECES[i]('black', [0,i], this);
      for (let k = 2; k < 6; k++) {
        this.board[k][i] = this.sentinal;
      }
    }
  }

  movePiece(oldPos, newPos) {
    const piece = this.getPiece(oldPos);
    this.setPiece(oldPos, this.sentinal);
    this.setPiece(newPos, piece);
    return piece;
  }

  getPiece(pos) {
    return this.board[pos[0]][pos[1]];
  }

  setPiece(pos, piece) {
    this.board[pos[0]][pos[1]] = piece;
  }
}

export default Board;
