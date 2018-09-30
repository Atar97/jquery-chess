import Stepable from './stepable';
class Knight extends Stepable {
  constructor(color, pos, board) {
    super(color, pos, board);
    this.str = '&#9822;';
    this.steps = [
      [1,2], [2,1], [-1, 2], [-2, 1],
      [-1,-2], [-2,-1], [1, -2], [2, -1]
              ];
  }
}

export default Knight;
