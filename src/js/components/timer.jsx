import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: parseInt(props.totalTime),
      buttonText: 'Start'
    };
    this.downTick = this.downTick.bind(this);
    this.handle = null;
  }

  render() {
    return <div className='timer'>
      <h2>{this.toStr.bind(this)()}</h2>
      <button onClick={this.change.bind(this)}>
        {this.state.buttonText}
      </button>
    </div>;
  }

  downTick() {
    this.setState({timeLeft: this.state.timeLeft - 1});
  }

  componentWillUnmount() {
    this.stop();
  }

  toStr() {
    const minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft % 60;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  }

  stop() {
    clearInterval(this.handle);
    this.handle = null;
  }

  start() {
    this.handle = setInterval(this.downTick, 1000);
  }

  change() {
    if (this.handle) {
      this.stop();
      this.setState({buttonText: 'Start'});
    } else {
      this.start();
      this.setState({buttonText: 'Stop'});
    }
  }

}

export default Timer;
