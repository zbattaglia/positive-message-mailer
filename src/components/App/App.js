import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  handleClick = (event) => {
    let message = event.target.parentNode.children[0].textContent;
    console.log( 'Sending message', message );
    this.props.dispatch({ type: 'SEND_MESSAGE', payload: message });  
}

  render() {
    return (
      <div>
        <header>
          <h1>Positive Message Mailer!</h1>
        </header>
        <div>
          <p> “You’re off to great places, today is your day. Your mountain is waiting, so get on your way.”
            - Dr. Seuss (Author/Poet)</p>
            <button onClick={ (event) => this.handleClick( event ) }>Send Message</button>
        </div>
        <div>
          <p>“Once you replace negative thoughts with positive ones, you’ll start having positive results.”
            - Willie Nelson (Musician)</p>
            <button onClick={ this.handleClick }>>Send Message</button>
        </div>
        <div>
          <p>“It always seems impossible until it is done.”
            - Nelson Mandela (Political Leader)</p>
            <button onClick={ this.handleClick }>>Send Message</button>
        </div>
        <div>
          <p>“Keep your face to the sunshine and you cannot see a shadow.”
            - Helen Keller (Author)</p>
            <button onClick={ this.handleClick }>>Send Message</button>
        </div>
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