import React, { Component } from 'react';
import { connect } from 'react-redux';

// cron used to schedule tasks
const cron = require('node-cron');
// userList is a placholder for database information of users and their emails
let userList = [{ user: 'system', recipient: 'Zach', email: 'zbattaglia3@gmail.com', }, { user: 'system', recipient: 'Zach', email: 'zbattaglia3@yahoo.com', }];

class ScheduledMessages extends Component {

    // on app load runs scheduler to execute automated emails at 4:30 every morning
    componentDidMount(){
        cron.schedule('30 4 * * *', () => {
            console.log( 'running a task in the scheduledMessages component' );
            this.sendAutomatedMessage();
        });
    };

    // loops over the user array. for each user passes the user info and a random message from messageList to the SEND_MESSAGE 
    // saga to send in email
  sendAutomatedMessage = () => {
     for (let userInfo of userList ) {
        let message = this.props.messageList[ Math.floor(Math.random() * this.props.messageList.length ) ]
        this.props.dispatch({ type: 'SEND_MESSAGE', payload: {userInfo, message} })
     }
}

  render() {
    return (
      <></>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    messageList: reduxState.messageReducer,
});

export default connect(mapReduxStateToProps)(ScheduledMessages);