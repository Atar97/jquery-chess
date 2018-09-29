const View = require('./view.js');
const Game = require('./game.js');

const renderView = () => {
  const $mainContainer = $('.board-container');
  const game = new Game();
  const view = new View(game, $mainContainer);
};

export default renderView;
