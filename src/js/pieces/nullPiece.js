const Piece = require('./piece.js');

class NullPiece extends Piece {
  constructor() {
    super();
    this.sym = ' ';
    this.str = ' ';
  }
}

module.exports = NullPiece;
