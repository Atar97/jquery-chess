import React from 'react';
import PlayerHeader from './header';
import Timer from './timer';

class Player extends React.Component {
  render() {
    return (
      <div className='player'>
        <PlayerHeader name='Austin' color='White' />
        <Timer totalTime={300} />
      </div>
    );
  }
}

export default Player;
