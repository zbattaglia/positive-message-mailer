const express = require('express');

const router = express.Router();

const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  console.log( 'Got message on server', req.body.message );
  console.log( 'password =', process.env.PASSWORD)
  sendEmail( req.body.message );
  res.sendStatus(200);
});

  sendEmail = ( message ) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: `${process.env.USERNAME}`,
        pass: `${process.env.PASSWORD}`
      }
    })

    const mailOptions = {
      from: 'zbattaglia3@gmail.com',
      to: 'zbattaglia3@gmail.com',
      subject: 'testing automated emailing',
      text: message
    };

    transporter.sendMail( mailOptions, (err, info) => {
      if(err) {
        console.log( 'error sending email', err );
      }
      else {
        console.log( 'Success!', info );
      }
    })
  }

module.exports = router;