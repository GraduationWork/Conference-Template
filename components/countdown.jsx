import React from 'react'
import Request from 'request-promise';

export default class Countdown extends React.Component {

    //documentation - https://www.npmjs.com/package/request-promise
    constructor(props) {
        super(props);
        this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.options = {
            uri: 'http://localhost:8000/feeds/init.json',
            json: true,
            simple: false,
            resolveWithFullResponse: true
        };
    }

    componentWillMount() {
        Request(this.options) 
            .then(function(response) {
                let content = response.body;
                console.log("response", content);
                this.props.start = content.start;
                console.log(`content.start=${content.start}`)
            }.bind(this))
            .catch(function(err) {
                console.log("Error", err);
            });
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.timer);
    }

    tick() {
        let timesLeft = this.props.start*1000 -  Date.now();
        var seconds = Math.floor( (timesLeft/1000) % 60 );
        var minutes = Math.floor( (timesLeft/1000/60) % 60 );
        var hours = Math.floor( (timesLeft/(1000*60*60)) % 24 );
        var days = Math.floor( timesLeft/(1000*60*60*24) );

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }

    render() {
        return (
            <div className="my-flex-container">
                <div className="my-flex-block">
                    <span>{this.state.days}</span>
                    <span>Days</span>
                </div>
                <div className="my-flex-block">
                    <span>{this.state.hours}</span>
                    <span>Hours</span>
                </div>
                <div className="my-flex-block">
                    <span>{this.state.minutes}</span>
                    <span>Minutes</span>
                </div>
                <div className="my-flex-block">
                    <span>{this.state.seconds}</span>
                    <span>Seconds</span>
                </div>
            </div>
        );
    }
}
