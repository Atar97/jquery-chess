import View from './view';
import Game from './game';
import Board from './board';
import Piece from './pieces/piece';
import King from './pieces/king';
import Knight from './pieces/knight';

const renderView = () => {
  const $mainContainer = $('.board-container');
  const game = new Game();
  const view = new View(game, $mainContainer);
};

export default renderView;
