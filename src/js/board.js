const Bishop =  require('./pieces/bishop.js');
const King = require('./pieces/king.js');
const Knight = require('./pieces/knight.js');
const Pawn = require('./pieces/pawn.js');
const Queen = require('./pieces/queen.js');
const Rook = require('./pieces/Rook.js');
const NullPiece = require('./pieces/nullPiece.js');

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
      this.board[0][i] = new this.POWERPIECES[i]('white', [0,i]);
      this.board[1][i] = new Pawn('white', [0,i]);
      this.board[6][i] = new Pawn('black', [0,i]);
      this.board[7][i] = new this.POWERPIECES[i]('black', [0,i]);
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

module.exports = Board;
