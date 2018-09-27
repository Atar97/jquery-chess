const Piece = require('./piece.js');
class Pawn extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'p';
    this.str = '&#9823;';
  }
}

module.exports = Pawn;
