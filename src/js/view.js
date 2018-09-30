class View {

  constructor(game, $container) {
    this.game = game;
    this.$container = $container;
    this.firstClick = null;
    this.buildBoard();
    this.bindSquares();
    this.render();
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
    const $square = $(`<div class='square'></div>`);
    const pos = [Math.floor(number / 8), number % 8];
    $square.data('pos', pos);
    if (this.whiteSquare(pos)) {
      $square.addClass('white-square');
    } else {
      $square.addClass('black-square');
    }
    return $square;
  }

  bindSquares() {
    const $squares = $('.square');
    let boundMove = this.move.bind(this);
    $squares.each(function(index) {
      const $square = $(this);
      $square.on('click', e => {
        const $clickedSq = $(e.currentTarget);
        $clickedSq.addClass('selected');
        boundMove($clickedSq);
      });
    });
  }

  // this will be called between each move
  render() {
    const $squares = $('.square');
    const game = this.game;
    $squares.each(function(index) {
      const $square = $(this);
      const pos = $square.data('pos');
      const piece = game.getPiece(pos);
      $square.children().remove();
      $square.append(`<p class="${piece.color}">${piece.str}</p>`);
    });
  }

  move($clickedSq) {
    if (this.firstClick) {
      this.game.movePiece(this.firstClick, $clickedSq.data('pos'));
      this.firstClick = null;
      debugger;
      $('.selected').removeClass('selected');
      this.render();
      return true;
    } else {
      this.firstClick = $clickedSq.data('pos');
      return false;
    }
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

export default View;
