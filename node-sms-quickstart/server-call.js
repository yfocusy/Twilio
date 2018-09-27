//const http = require('http');
const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (req,res) =>{
	const twiml = new VoiceResponse();

	twiml.say({voice:'alice'},'Hello from your pals at Twilio. Have fun!');

	res.type('text/xml');
	res.send(twiml.toString());

});

app.listen(1337);