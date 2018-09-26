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
      this.board[6][i] = new this.POWERPIECES[i]('black', [0,i]);
      this.board[7][i] = new Pawn('black', [0,i]);
      for (k = 2; k < 6; k++) {
        this.board[k][i] = new NullPiece([k,i]);
      }
    }
  }
}

module.exports = Board;
