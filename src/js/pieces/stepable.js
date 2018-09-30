import Piece from './piece';

class Stepable extends Piece {
  constructor(...args) {
    super(...args);
  }

  allMoves() {
    const result = [];
    const that = this;
    this.steps.forEach((el) => {
      const tempPos = [that.pos[0] + el[0], that.pos[1] + el[1]];
      that.addToMoveTree(tempPos, result);
    });
    return result;
  }
}

export default Stepable;
