
/**
 * 
 */



const twilio = require("twilio")(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

const body = "More ice creams are coming!";

const numbers = ["10053","6500053"]




/**
 * In this code we actually map over the numbers and send a message 
 * for each of them. This returns a promise each time, 
 * so we collect the results of all the promises using Promise.all 
 * and when they are all complete, print out a success message. 
 * If one of the promises fails, we’ll print out the error.
 */

Promise.all(
	numbers.map(number=>{
		return twilio.messages.create({
			to: number,
			from: process.env.TWILIO_MESSAGING_SERVICE_SID,
			body: body
		});
	})
)
.then(messages=>{
	console.log('Message sent!');
})
.catch(err => console.error(err));
