import React from 'react';
import ReactDom from 'react-dom';
import Player from './components/player';
import renderView from './main';

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
