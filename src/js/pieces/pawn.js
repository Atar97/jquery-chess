import Piece from './piece';

class Pawn extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.sym = 'p';
    this.str = '&#9823;';
  }
}

export default Pawn;
