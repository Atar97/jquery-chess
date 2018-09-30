import Slideable from './slideable';

class Queen extends Slideable {
  constructor(color, pos) {
    super(color, pos);
    this.str = '&#9819;';
  }
}

export default Queen;
