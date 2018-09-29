import React from 'react';

const PlayerHeader = props => (
  <div className='player-header'>
    <h1>{props.name}</h1>
    <h3>Color: {props.color}</h3>
  </div>
);

export default PlayerHeader;
