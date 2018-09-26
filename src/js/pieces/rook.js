const Piece = require('./piece.js');

class Rook extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'R';
    this.str = '&#9814';
  }
}

module.exports = Rook;
