import React from 'react'

export default class Countdown extends React.Component {

	constructor(props) {
        super(props);
        this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    componentWillMount() {
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
        let timesLeft = this.props.start - Date.now();
        let days = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        let hours = Math.ceil(timeDiff / (1000 * 3600)); 
        let minutes = Math.ceil(timeDiff / (1000));
        let seconds = Math.ceil(timeDiff / (1000));  
        this.setState( {elapsed: this.props.start - Date.now()});
    }

	render() {
		let elapsed = Math.round(this.state.elapsed / 100);
		let seconds = (elapsed / 10).toFixed(1); 
		return (
            <div>
                <p>Day: {this.state.days}</p>
                <p>Hours: {this.state.hours}</p>
                <p>Minutes: {this.state.minutes}</p>
                <p>Seconds: {this.state.seconds}</p>
            </div>
        );
	}
}
