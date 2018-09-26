class View {

  constructor(game, $container) {
    this.game = game;
    this.$container = $container;
    this.buildBoard();
  }

  buildBoard() {
    const $board = $('<div class="board"></div>');
    for (let i = 0; i < 64; i++) {
      const $square = this.makeSquare(i);
      $board.append($square);
    }
    this.$container.append($board);
  }

  makeSquare(number) {
    const $square = $("<div class='square'></div>");
    const pos = [Math.floor(number / 8), number % 8];
    $square.data('pos', pos);
    if (this.whiteSquare(pos)) {
      $square.addClass('white');
    } else {
      $square.addClass('black');
    }
    
    $square.append(`<p></p>`);
    return $square;
  }

  whiteSquare(pos) {
    if (pos[1] % 2 === 0) {
      if (pos[0] % 2 === 0) {
        return true;
      }
    } else {
      if (pos[0] % 2 === 1) {
        return true;
      }
    }
    return false;
  }

}

module.exports = View;
