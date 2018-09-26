const Piece = require('./piece.js');

class Bishop extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'B';
    this.str = '&#9815;';
  }
}

module.exports = Bishop;
