import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'cirrus-ui';

import './UserInfo.css';

class UserInfo extends Component {
    //sets initial state for form
state = {
    user: '',
    recipient: '',
    email: '',
    loggedIn: false,
}

// tracks change on input fields and updates local state
handleChange = ( event, propName ) => {
    console.log( 'got change', event.target.value, propName );
    this.setState({
        ...this.state,
        [ propName ]: event.target.value,
    })
}

// on click dispatches updateinfo action and resets state.
handleClick = () => {
    console.log( 'Got User info' );
    this.setState({
        loggedIn: true,
    })
    this.props.dispatch({ type: 'UPDATE_INFO', payload: this.state })

    this.setState({
        user: '',
        recipient: '',
        email: '',
    })
}


renderUser() {
    if ( this.state.loggedIn === false || this.props.userInfo === false ) {
        return <form>
            <div className="row ignore-screen level">
                <div className="col-3 ignore-screen level-item"><p class="test">Your Name:</p></div>
                <div className="col-9 ignore-screen level-item">
                    <input className="inputField font-normal" type="text" value={this.state.user} onChange={ (event) => this.handleChange( event, 'user' )}></input>
                </div>
            </div>
            <br />
            <div className="row ignore-screen level">
                <div className="col-3 ignore-screen level-item"><p class="test">Their Name:</p></div>
                <div className="col-9 ignore-screen level-item">
                    <input className="inputField font-normal" type="text" value={this.state.recipient} onChange={ (event) => this.handleChange( event, 'recipient' )}></input>
                </div>
            </div>
            <br />
            <div className="row ignore-screen level">
                <div className="col-3 ignore-screen level-item"><p class="test">Their Email:</p></div>
                <div className="col-9 ignore-screen level-item">
                    <input className="inputField font-normal" type="text" value={this.state.email} onChange={ (event) => this.handleChange( event, 'email' )}></input>
                </div>
            </div>
            <br />
            <div className="btn-container">
                <button className="btn-primary btn-success" onClick={this.handleClick}>Submit</button>
            </div>
        </form>
    }
    else {
        return <p id="confirmation">Thanks! Select a message below to send.</p>
    }
}

  render() {
    return (
    this.renderUser()
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    userInfo: reduxState.userReducer.userInfo
});

export default connect(mapReduxStateToProps)(UserInfo);