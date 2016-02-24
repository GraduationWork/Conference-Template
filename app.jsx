import React from 'react';
import Request from 'request-promise';
import Countdown from './countdown';


//documentation - https://www.npmjs.com/package/request-promise
var options = {
    uri: 'https://datamatcher.staging-data.foxsports.com/matcher-restful-api/rest/control/start/state',
    json: true // Automatically parses the JSON string in the response 
};


Request(options)
	.then(function(data) {
		console.log("Data", data);
	})
	.catch(function(err) {
		console.log("Error", err);
	});




React.render(
    <Countdown start={Date.now()} />, document.body
);