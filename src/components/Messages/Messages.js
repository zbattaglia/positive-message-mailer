import React, { Component } from 'react';
import { connect } from 'react-redux';

class Messages extends Component {

  handleClick = (message) => {
    let userInfo = this.props.userInfo;
    this.props.dispatch({ type: 'SEND_MESSAGE', payload: {userInfo, message} });  
    // console.log( 'Sending a message', message)
}

showMessages() {
    if( this.props.userInfo.loggedIn === true ) {
        return <div>
            {this.props.messageList.map( (message, index) =>
                <div key={index}>
                <p>{message}</p>
                <button onClick={ (event) => this.handleClick( message )}>Send Message</button>
          </div>
        )}
    </div>
    }
    else {
        return <></>
    }
}

  render() {
    return (
      this.showMessages()
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    messageList: reduxState.messageReducer,
    userInfo: reduxState.userReducer
});

export default connect(mapReduxStateToProps)(Messages);