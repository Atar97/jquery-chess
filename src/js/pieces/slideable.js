import Piece from './piece';

class Slideable extends Piece {
  constructor(color, pos) {
    super(color, pos);
    this.ORTHOGONAL = [[1,0], [0,1], [-1, 0], [0, -1]];
    this.DIAGONAL = [[1,1], [1,-1], [-1, 1], [-1, -1]];
  }

  allMoves(newPos) {
    const dirs = this.moveDirs();
    result = [];
    dirs.forEach(dir => {
      let tempPos = [this.pos[0] + dir[0], this.pos[1] + dir[1]];
      while (Piece.onBoard(tempPos)) {
        tempPos = [tempPos[0] + dir[0], tempPos[1] + dir[1]];
        const piece = this.board.getPiece(tempPos);
        if (piece.color === null) {
          result.push(tempPos);
        } else if (piece.color != this.color) {
          result.push(tempPos);
          break;
        } else {
          break;
        }
      }
    });
  }

  moveDirs() {
    return this.ORTHOGONAL;
  }

}

export default Slideable;
