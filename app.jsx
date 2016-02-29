import React from 'react';
import Request from 'request-promise';
import Timedown from './components/Timedown';
import Speaker from './components/Speaker';

var options = {
    uri: 'http://localhost:8000/feeds/init.json',
    json: true,
    simple: false,
    resolveWithFullResponse: true
};

var run = function() {
    //make application component
    var timedown = React.render(
        <Timedown />, document.getElementById('timedown')
    );

    var speaker = React.render(
        <Speaker />, document.getElementById('speaker')
    );

    Request(options) 
        .then(function(response) {
            let content = response.body;
            React.render(<Timedown time={content.start} />, document.getElementById('timedown'));
            React.render(
                <Speaker 
                    name={content.speakers[0].name} 
                    description={content.speakers[0].description}
                    url={content.speakers[0].url}
                    photoUrl={content.speakers[0].photoUrl}
                     />, document.getElementById('speaker')
            );

        }.bind(this))
        .catch(function(err) {
            console.log("Error", err);
        });

} 

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
