const View = require('./view.js');
const Game = require('./game.js');

$(() => {
  const $mainContainer = $('.board-container');
  const game = new Game();
  const view = new View(game, $mainContainer);
  view.render();
  setTimeout(() => {
    game.movePiece([0,0], [4,4]);
    view.render();
  }, 2000);
});
