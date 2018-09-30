import React from 'react';
import ReactDom from 'react-dom';
import Player from './components/player';
import renderView from './boardView';

$(() => {

  renderView();

  ReactDom.render(
    <Player />,
      document.getElementById('player1')
  );

  ReactDom.render(
    <Player />,
    document.getElementById('player2')
  );

});
