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
    $square.attr('position', pos.toString());
    if (this.whiteSquare(pos)) {
      $square.addClass('white-square');
    } else {
      $square.addClass('black-square');
    }
    return $square;
  }

  bindSquares() {
    const $squares = $('.square');
    const that = this;
    $squares.each(function(index) {
      const $square = $(this);
      $square.on('click', that.onClick.bind(that));
    });
  }

  onClick(event) {
    const $clickedSq = $(event.currentTarget);
    $clickedSq.addClass('selected');
    const piece = this.game.getPiece($clickedSq.data('pos'));
    const validSquares = piece.allMoves().map((pos) => {
      return this.getSquareByPos(pos);
    });
    debugger;
    validSquares.forEach((el) => el.addClass('valid'));
    this.move($clickedSq);
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
      $('.selected').removeClass('selected');
      $('.valid').removeClass('valid');
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

  getSquareByPos(pos) {
    const strPos = pos.toString();
    return $(`.square[position='${strPos}']`);
  }

}

export default View;
