const View = require('./view.js');
const Game = require('./game.js');

$(() => {
  const $mainContainer = $('.board-container');
  new View(new Game(), $mainContainer);
});
