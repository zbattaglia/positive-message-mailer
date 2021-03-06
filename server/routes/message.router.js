const express = require('express');

const router = express.Router();

const nodemailer = require('nodemailer');

// messageList is an array of messages stored on the server
const messageList = require('../modules/messageList');

// post route to "Post" the message to the user's email
router.post('/', (req, res) => {
  console.log( 'Got message on server', req.body );
  sendEmail( req.body );
  res.sendStatus(200);
}); // end POST route

  // sendEmail function uses nodemailer to send email containing message passed in the POST
  sendEmail = ( emailInfo ) => {
    const email = emailInfo.userInfo.email;
    let recipient = emailInfo.userInfo.recipient;
    let sender = emailInfo.userInfo.user;
    let message = emailInfo.message;
    let body = '';
    // if statement to determine if the email is automated (sent from the system) or manually sent from a user
    // adjusts the email content accordingly
    if( sender === 'system' ) {
      body = `Hey ${recipient}! We wanted to start your day off with some positive thoughts!<br /><br />
              ${message}<br /><br />
              To see some more motivational messages and send one of your own click <a href="http://localhost:3000/">Here</a></p>`
    }
    else {
      body = `<p>Hey ${recipient}! Your friend ${sender} has some positive thoughts to send your way. <br /><br />
              ${message} <br /><br />
              To see some more motivational messages and send one of your own click <a href="http://localhost:3000/">Here</a></p>`
    }

    // nodemailer confiuration. host email is a gmail account
    // username and password are env variables set in the .env file
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: `${process.env.USERNAME}`,
        pass: `${process.env.PASSWORD}`
      }
    })

    // recipients email is obtained from req.body
    const mailOptions = {
      from: `${process.env.EMAIL}`,
      to: `${email}`,
      subject: `A positive message for you.`,
      html:`${body}`
    };

    transporter.sendMail( mailOptions, (err, info) => {
      if(err) {
        console.log( 'error sending email', err );
      }
      else {
        console.log( 'Success!', info );
      }
    })
  }; // end sendEmail

  // get messages in messageList and return to client
  router.get( '/', (req, res) => {
    console.log( 'Got messageList', messageList );
    res.send( messageList );
  }); // end GET route

module.exports = router;