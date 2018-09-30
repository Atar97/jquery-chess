import Slideable from './slideable';

class Bishop extends Slideable {
  constructor(color, pos, board) {
    super(color, pos, board);
    this.str = '&#9821;';
    this.moveDirs = this.DIAGONAL;
  }
}

export default Bishop;
