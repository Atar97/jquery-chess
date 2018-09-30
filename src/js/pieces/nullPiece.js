import Piece from './piece';

class NullPiece extends Piece {
  constructor() {
    super(null);
    this.str = ' ';
  }
}

export default NullPiece;
