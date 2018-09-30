import Piece from './piece';

class NullPiece extends Piece {
  constructor() {
    super(null);
    this.sym = ' ';
    this.str = ' ';
  }
}

export default NullPiece;
