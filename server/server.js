const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// Route includes
const messageRouter = require('./routes/message.router');

// require environmental variables for storing password and user name for emails
require('dotenv').config();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/message', messageRouter );

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
