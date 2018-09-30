import Slideable from './slideable';

class Rook extends Slideable {
  constructor(color, pos) {
    super(color, pos);
    this.str = '&#9820';
  }
}

export default Rook;
