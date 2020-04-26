import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfo extends Component {
state = {
    user: '',
    recipient: '',
    email: '',
    loggedIn: false,
}

handleChange = ( event, propName ) => {
    console.log( 'got change', event.target.value, propName );
    this.setState({
        ...this.state,
        [ propName ]: event.target.value,
    })
}

handleClick = () => {
    console.log( 'Got User info' );
    this.setState({
        loggedIn: true,
    })
    this.props.dispatch({ type: 'UPDATE_INFO', payload: {...this.state, loggedIn: true} })
}


renderUser() {
    if ( this.state.loggedIn === false ) {
        return <div>
            <label>Your Name:</label><input placeholder="Name" onChange={ (event) => this.handleChange( event, 'user' )}></input>
            <br />
            <label>Their Name:</label><input placeholder="Name" onChange={ (event) => this.handleChange( event, 'recipient' )}></input>
            <br />
            <label>Their email:</label><input placeholder="Email" onChange={ (event) => this.handleChange( event, 'email' )}></input>
            <br />
            <button onClick={this.handleClick}>Submit</button>
        </div>
    }
    else {
        return <p>Thanks {this.state.user}! Select a message below to send to {this.state.recipient}</p>
    }
}

  render() {
    return (
    this.renderUser()
    );
  }
}

export default connect()(UserInfo);