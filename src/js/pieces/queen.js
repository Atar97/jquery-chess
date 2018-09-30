import Slideable from './slideable';

class Queen extends Slideable {
  constructor(color, pos, board) {
    super(color, pos, board);
    this.str = '&#9819;';
    this.moveDirs = this.ORTHOGONAL.concat(this.DIAGONAL);
  }
}

export default Queen;
