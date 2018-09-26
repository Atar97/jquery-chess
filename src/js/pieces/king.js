const Piece = require('./piece.js');
class King extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'R';
    this.str = '&#9812;';
  }
}

module.exports = King;
