const Piece = require('./piece.js');

class NullPiece extends Piece {
  constructor(pos) {
    this.color = null;
    this.sym = ' ';
    this.str = ' ';
    this.pos = pos;
  }
}

module.exports = NullPiece;
