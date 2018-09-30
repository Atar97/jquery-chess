import Piece from './piece';

class Pawn extends Piece {
  constructor(color, pos, board) {
    super(color, pos, board);
    this.str = '&#9823;';
    if (this.color === 'white') {
      this.direction = 1;
    } else {
      this.direction = -1;
    }
  }

  allMoves() {
    const result = [];
    const blocked = this.forwardOne(result);
    if (this.onStart() && result.length != 0) {
      const forwardTwo = [this.pos[0] + 2 * this.direction, this.pos[1]];
      if (this.board.empty(forwardTwo)) result.push(forwardTwo);
    }
    this.diagonalAttacks(result);
    return result;
  }

  forwardOne(result) {
    const forward = [this.pos[0] + this.direction, this.pos[1]];
    if (this.board.empty(forward)) {
      return result.push(forward);
    }
    return false;
  }

  diagonalAttacks(result) {
    const attack1 = this.diagonalAttack(1);
    const attack2 = this.diagonalAttack(-1);
    if (attack1) result.push(attack1);
    if (attack2) result.push(attack2);
  }

  diagonalAttack(direction) {
    const diag = [this.pos[0] + this.direction, this.pos[1] + direction];
    if (Piece.onBoard(diag)) {
      const diagColor = this.board.getPiece(diag).color;
      if (diagColor && diagColor != this.color) {
        return diag;
      }
    }
    return false;
  }


  onStart() {
    if (this.color === 'black') {
      if (this.pos[0] === 6) {
        return true;
      }
    } else {
      if (this.pos[0] === 1) {
        return true;
      }
    }
    return false;
  }

}

export default Pawn;
