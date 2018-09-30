import React from 'react';
import Player from './player';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {player1: 'Player1', player2: 'Player2'};
    this.storeText = this.storeText.bind(this);
  }

  render() {
    return (
      <div>
        <Player players={this.state} />
        <div className='modal-form-container'>
          <form className='modal-form'  onSubmit={this.submit.bind(this)}>

            <label htmlFor='player1'>Player1 Name: </label>
            <input className='text' onChange={this.storeText}
              type='text' id='player1'></input>

            <label htmlFor='player2'>Player2 Name: </label>
            <input type='text' className='text'
              onChange={this.storeText} id='player2'></input>

            <input className='button' type='submit'
              value='GO!' onClick={this.buttonClick.bind(this)}>
            </input>

            <a href='#' onClick={this.linkClick.bind(this)}>Cancel</a>
          </form>
      </div>
    </div>
    );
  }

  buttonClick(event) {
    event.preventDefault();
    $('.modal-screen').toggleClass('disapear');
    $('.modal-form-container').toggleClass('disapear');
  }

  submit(e) {
    event.preventDefault();
  }

  storeText(event) {
    const value = event.target.value;
    this.storeName(event.target.id, value);
  }

  linkClick(event) {
    event.preventDefault();
    $('.modal-screen').toggleClass('disapear');
    $('.modal-form-container').toggleClass('disapear');
    this.setState({
      player1: 'Player1',
      player2: 'Player2'
    });
  }

  storeName(whichPlayer, value) {
    if (whichPlayer === 'player1') {
      this.setState({player1: value});
    } else {
      this.setState({player2: value});
    }
  }

}

export default Form;
