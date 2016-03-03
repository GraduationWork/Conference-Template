import React from 'react'; 
import ReactApp from './components/ReactApp';
import Request from 'request-promise';

React.render(<ReactApp />, document.getElementById('react-app'));     

var options = {
    uri: 'http://localhost:8000/public/feeds/init.json',
    json: true,
    simple: false,
    resolveWithFullResponse: true
};

Request(options) 
    .then(function(response) {
        let content = response.body;
        React.render(<ReactApp content={content} />, document.getElementById('react-app'));  
    }.bind(this))
    .catch(function(err) {
        console.log("Error", err);
    });


 