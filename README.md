# Positive Message Mailer

## Description

_Duration: 2 days_

This application allows users to send a positive quote from a list to another person via email or schedule automated emails be sent to users on a schedule they choose. This project was used to test nodemailer and node-cron and use Cirrus for styling.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [Cirrus.CSS](https://spiderpig86.github.io/Cirrus/)

## Installation
NOTE: Currently to use the app a valid [Gmail](https://mail.google.com/mail/) account is required.
If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a .env file in the root of the programwith the following parameters (the .env will keep your information protected):
    - PASSWORD = "Your gmail password"
    - USERNAME = "Your gmail username"
    - MAIL = "Your email address"
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

Manual Messaging:
1. Fill out the information on the home page and click submit.
2. Pick a quote you like and click the "Send Message" button and your email has been sent!

Automated Messaging:
1. In scheduledMessages.js update the 'recipient' and 'email' paramaters of the usersList variable on line 7. This simulates a database of users. The users in the userList will get a random quote emailed to them as schedule in the cron.schedule. (Default is every day at 4:30 AM) 
2. To adjust the schedule refer to the [node-cron](https://www.npmjs.com/package/node-cron) documentation


## Built With

- Node
- React
- Redux
- Nodemailer
- node-cron
- Cirrus.CSS

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.
Thanks to Cirrus.CSS for their open styling library.

## Support
If you have suggestions or issues, please email me at [zbattaglia3@gmail.com](www.google.com)

