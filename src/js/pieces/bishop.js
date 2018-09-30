import Slideable from './slideable';

class Bishop extends Slideable {
  constructor(color, pos) {
    super(color, pos);
    this.str = '&#9821;';
  }
}

export default Bishop;
