import React from 'react';
import Speaker from './Speaker';
import Timedown from './Timedown';
import Request from 'request-promise';

export default class ReactApp extends React.Component {

	constructor(props) {
        super(props);
        this.options = {
		    uri: 'http://localhost:8000/feeds/init.json',
		    json: true,
		    simple: false,
		    resolveWithFullResponse: true
		};
    }

    componentWillMount() {
        console.log("componentWillMount23")
        Request(this.options) 
        .then(function(response) {
            let content = response.body;
            this.props.content = content;
        }.bind(this))
        .catch(function(err) {
            console.log("Error", err);
        });
    }

    componentDidMount() {
        console.log("componentDidMount3")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount23")
    }

    /*<Timedown time={content.start} />
            	<Speaker 
                    name={content.speakers[0].name} 
                    description={content.speakers[0].description}
                    url={content.speakers[0].url}
                    photoUrl={content.speakers[0].photoUrl}/>*/

	render() {
		let content = this.props.content;
        return (
            <div>
            	<Timedown time={1457933605}  />
            	<Speaker />
            </div>
        );
    }

}