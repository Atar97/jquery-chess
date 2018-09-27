const Piece = require('./piece.js');
class Knight extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'N';
    this.str = '&#9822;';
  }
}

module.exports = Knight;
