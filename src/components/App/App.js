import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from '../UserInfo/UserInfo';
import Messages from '../Messages/Messages';
// scheduledMessages is the automated emailing component
import ScheduledMessages from '../ScheduledMessages/ScheduledMessages';

class App extends Component {


  componentDidMount() {
    this.props.dispatch({ type: 'GET_MESSAGES' });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Positive Message Mailer!</h1>
        </header>
        <UserInfo />
        <Messages />
        <ScheduledMessages />
        <footer>
          <p>See more messages at <a href="https://www.berries.com/blog/positive-quotes">berries.com</a></p>
        </footer>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(App);