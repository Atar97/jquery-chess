import React from 'react';
import ReactDom from 'react-dom';
import Player from './components/player';
import renderView from './boardView';
import NewScreen from './components/newScreen';

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

  ReactDom.render(
    <NewScreen />,
    document.getElementById('modal-root')
  );
});
