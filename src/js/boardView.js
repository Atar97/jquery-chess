import View from './view';
import Game from './game';
import King from './pieces/king';

const renderView = () => {
  const $mainContainer = $('.board-container');
  const game = new Game();
  const view = new View(game, $mainContainer);
};

export default renderView;
