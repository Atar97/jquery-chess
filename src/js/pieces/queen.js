const Piece = require('./piece.js');

class Queen extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'R';
    this.str = '&#9819;';
  }
}

module.exports = Queen;
