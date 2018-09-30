import React from 'react';
import ReactDom from 'react-dom';
import Player from './components/player';
import renderView from './boardView';
import NewScreen from './components/newScreen';

$(() => {

  renderView();

  ReactDom.render(
    <Player />,
      document.getElementById('players')
  );

  ReactDom.render(
    <NewScreen />,
    document.getElementById('modal-root')
  );
});
