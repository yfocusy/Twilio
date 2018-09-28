const accountSid = 'AC3b14e6e108ab432672157b196489b27';
const authToken = '135e418d1aac4904b91a937ba86e6a4';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
	to:   '+614260053',
	from: '+618850205',
	body:'This is send from TWILIO nodeJS backend'
})
.then((message) => console.log(message.sid))
.done();
