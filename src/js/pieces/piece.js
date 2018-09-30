class Piece {
  constructor(color, pos, board) {
    this.color = color;
    this.pos = pos;
    this.board = board;
  }

  static onBoard(pos) {
    const goodPos = [0,1,2,3,4,5,6,7];
    return goodPos.includes(pos[1]) && goodPos.includes(pos[0]);
  }

  move(newPos) {
    this.pos = newPos;
  }

  // decides whether to add a pos to the piece's move tree
  // for slideable pieces returns true or false if the piece should keep sliding
  addToMoveTree(pos, result) {
    const piece = this.board.getPiece(pos);
    if (piece.color === null) {
      result.push(pos);
      return true;
    } else if (piece.color != this.color) {
      result.push(pos);
      return false;
    } else {
      return false;
    }
  }

}

export default Piece;
