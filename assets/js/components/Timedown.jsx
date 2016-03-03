import React from 'react'


export default class Timedown extends React.Component {

    static defaultProps = {
        time: Date.now(),
    }

    //documentation - https://www.npmjs.com/package/request-promise
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
        let timesLeft = this.props.time*1000 -  Date.now();
        var seconds = Math.floor( (timesLeft/1000) % 60 );
        var minutes = Math.floor( (timesLeft/1000/60) % 60 );
        var hours = Math.floor( (timesLeft/(1000*60*60)) % 24 );
        var days = Math.floor( timesLeft/(1000*60*60*24) );
        seconds = String("0" + seconds).slice(-2);
        hours = String("0" + hours).slice(-2);
        minutes = String("0" + minutes).slice(-2);

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }

    render() {
        return (
            <div className="timedownBlock">
                <div className="timedownElement timedownDays">
                    <div className="timedownElementValue">{this.state.days}</div>
                    <div className="timedownElementLabel">Days</div>
                </div>
                <div className="timedownElement timedownHours">
                    <div className="timedownElementValue">{this.state.hours}</div>
                    <div className="timedownElementLabel">Hours</div>
                </div>
                <div className="timedownElement timedownMinutes">
                    <div className="timedownElementValue">{this.state.minutes}</div>
                    <div className="timedownElementLabel">Minutes</div>
                </div>
                <div className="timedownElement timedownSeconds">
                    <div className="timedownElementValue timedownElementSecondsValue">{this.state.seconds}</div>
                    <div className="timedownElementLabel">Seconds</div>
                </div>
            </div>
        );
    }
}
