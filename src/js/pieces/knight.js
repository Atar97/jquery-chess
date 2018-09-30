import Piece from './piece'
class Knight extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'N';
    this.str = '&#9822;';
  }
}

export default Knight;
