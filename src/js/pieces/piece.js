
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

}

export default Piece;
