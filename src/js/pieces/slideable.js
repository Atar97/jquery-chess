import Piece from './piece';
import Board from '../board';

class Slideable extends Piece {
  constructor(color, pos, board) {
    super(color, pos, board);
    this.ORTHOGONAL = [[1,0], [0,1], [-1, 0], [0, -1]];
    this.DIAGONAL = [[1,1], [1,-1], [-1, 1], [-1, -1]];
  }

  allMoves() {
    const dirs = this.moveDirs;
    const result = [];
    const that = this;
    dirs.forEach(dir => {
      let tempPos = [that.pos[0] + dir[0], that.pos[1] + dir[1]];
      while (Piece.onBoard(tempPos)) {
        if (!that.addToMoveTree(tempPos, result)) break;
        tempPos = [tempPos[0] + dir[0], tempPos[1] + dir[1]];
      }
    });
    return result;
  }

}

export default Slideable;
