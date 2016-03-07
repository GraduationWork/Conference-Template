import React from 'react';
import Timedown from './Timedown';
import DatePlace from './DatePlace';


export default class ConferenceBanner extends React.Component {

    static defaultProps = {
        background: '',
        times: {
            start: Date.now(),
            date: '',
            place: ''
        }
    }

    constructor(props) {
        super(props);
    }

    render() {

        var divStyle = {
            backgroundImage: 'url(' + this.props.background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
        };

        return (
           <div className="conference-banner-block" style={divStyle}>
                <div className="conference-banner-elements">
                    <DatePlace date={this.props.times.date}
                        place={this.props.times.place} />
                    <h3 className="banner-times-left-text">До начала осталось</h3>
                    <Timedown time={this.props.times.start} />
                </div>
           </div>
        );
    }

}