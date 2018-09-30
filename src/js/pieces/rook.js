import Slideable from './slideable';

class Rook extends Slideable {
  constructor(color, pos, board) {
    super(color, pos, board);
    this.str = '&#9820';
    this.moveDirs = this.ORTHOGONAL;
  }

}

export default Rook;
