import Piece from './piece';
class King extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'R';
    this.str = '&#9818;';
  }
}

export default King;
