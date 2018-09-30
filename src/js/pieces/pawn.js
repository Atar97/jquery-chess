import Piece from './piece';

class Pawn extends Piece {
  constructor(color, pos, board) {
    super(color, pos, board);
    this.str = '&#9823;';
  }

  allMoves() {
    return [
            [this.pos[0] + 1,this.pos[1]],
            [this.pos[0] - 1,this.pos[1]]
          ];
  }
}

export default Pawn;
