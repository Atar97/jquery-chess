import Stepable from './stepable';

class King extends Stepable {
  constructor(...args) {
    super(...args);
    this.str = '&#9818;';
    this.steps = [
      [1,0], [0,1], [-1, 0], [0, -1],
      [1,1], [1,-1], [-1, 1], [-1, -1]
    ];
  }
}

export default King;
