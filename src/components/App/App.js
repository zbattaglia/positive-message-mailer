import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from '../UserInfo/UserInfo';
import Messages from '../Messages/Messages';
// scheduledMessages is the automated emailing component
import ScheduledMessages from '../ScheduledMessages/ScheduledMessages';
import './App.css';

class App extends Component {

  //on page load get all messages
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MESSAGES' });
  }

  //renders the app. ScheduledMessages runs the node-cron task scheduler for automated emails
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