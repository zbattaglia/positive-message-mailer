import React, { Component } from 'react';
import { connect } from 'react-redux';

class Messages extends Component {

  handleClick = (message) => {
    this.props.dispatch({ type: 'SEND_MESSAGE', payload: message });  
    // console.log( 'Sending a message', message)
}

  render() {
    return (
      <div>
          {this.props.messageList.map( (message, index) =>
            <div key={index}>
              <p>{message}</p>
              <button onClick={ (event) => this.handleClick( message )}>Send Message</button>
            </div>
          )}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    messageList: reduxState.messageReducer
});

export default connect(mapReduxStateToProps)(Messages);