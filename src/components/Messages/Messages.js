import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Messages.css';

class Messages extends Component {

  // handleClick dispatches actions to send email and update user info 
  handleClick = (message) => {
    let userInfo = this.props.userInfo;
    this.props.dispatch({ type: 'SEND_MESSAGE', payload: {userInfo, message} });  
    this.props.dispatch({ type: 'UPDATE_INFO', payload: {userInfo: false} });
    // console.log( 'Sending a message', message)
}

// conditionally render the motivational messages only after getting user info
showMessages() {
    if( this.props.loggedIn === true ) {
        return <div>
            {this.props.messageList.map( (message, index) =>
                <div className="content" key={index}>
                <p>{message}</p>
                <button className="btn-light btn-small" onClick={ (event) => this.handleClick( message )}>Send Message</button>
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
    userInfo: reduxState.userReducer,
    loggedIn: reduxState.loggedInReducer,
});

export default connect(mapReduxStateToProps)(Messages);