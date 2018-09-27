/**
 * 1. import the Twilio Node.js module 
 * 2. initialise a new API client using your account sid and auth token. 
 * 3. setup the message
 * 
 */




const twilio = require('twilio')(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

const body = 'Ice cream is coming!';
const number = "+61426500053";


twilio.messages.create({
	to: number,
	from: process.env.TWILIO_NUMBER,
	body: body
}).then(message => {
	console.log(message.sid);

}).catch(err=> console.error(err));
