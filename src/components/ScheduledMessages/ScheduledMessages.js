// const cron = require('node-cron' );


// let task = cron.schedule( '* * * * *', (connect) => {
//     console.log( 'running a task every minute from a module' );
//     props.dispatch()
// });

// export default task;
import React, { Component } from 'react';
import { connect } from 'react-redux';

const cron = require('node-cron');
let userList = [{ user: 'system', recipient: 'Zach', email: 'zbattaglia3@gmail.com', }, { user: 'system', recipient: 'Zach', email: 'zbattaglia3@yahoo.com', }];

class ScheduledMessages extends Component {

    componentDidMount(){
        cron.schedule('*/10 * * * * *', () => {
            console.log( 'running a task in the scheduledMessages component' );
            // this.sendAutomatedMessage();
        });
    };

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