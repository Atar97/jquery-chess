import View from './view';
import Game from './game';
import Board from './board';
import Slideable from './pieces/slideable'

const renderView = () => {
  const $mainContainer = $('.board-container');
  const game = new Game();
  let b = new Board();
  let s1 = new Slideable('white',[3,3], b);
  console.log(s1);
  console.log(s1.allMoves());

  const view = new View(game, $mainContainer);
};

export default renderView;
