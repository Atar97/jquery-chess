import View from './view';
import Game from './game';
import Board from './board';
import Piece from './pieces/piece';

const renderView = () => {
  const $mainContainer = $('.board-container');
  const game = new Game();
  window.rook = new Rook('black', [5,0], game.board);
  const view = new View(game, $mainContainer);
};

export default renderView;
