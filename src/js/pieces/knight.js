const Piece = require('./piece.js');
class Knight extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'N';
    this.str = '&#9816;';
  }
}

module.exports = Knight;
