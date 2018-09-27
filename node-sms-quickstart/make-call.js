const accountSid = 'AC3b14e6e108ab4326721157b196489b27';
const authToken = '135e418d1aac4904b991a937ba86e6a4';

const client = require('twilio')(accountSid, authToken);

client.calls.create({
	url:'http://demo.twilio.com/docs/voice.xml',
	to:   '+61426500053',
	from: '+61488850205',
}, function(err,call){
	if(err){
		console.log(err);
	}else{
		console.log(call.sid);
	}
});