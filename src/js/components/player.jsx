import React from 'react';
import PlayerHeader from './header';
import Timer from './timer';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='player'>
        <PlayerHeader name={this.props.players.player1} color='white' />
        <Timer totalTime={300} />
        <PlayerHeader name={this.props.players.player2} color='black' />
        <Timer totalTime={300} />
      </div>
    );
  }
}

export default Player;
