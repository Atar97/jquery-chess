import React from 'react';
import Form from './form';

class NewScreen extends React.Component {

  render() {
    return (
      <div className="modal">
        <Form />
        <section className='modal-screen'></section>
      </div>
    );
  }

}

export default NewScreen;
