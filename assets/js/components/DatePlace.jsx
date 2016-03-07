import React from 'react';

export default class DatePlace extends React.Component {

    static defaultProps = {
        date: '',
        place: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="date-place-block">
                <div className="date-place-block-date">{this.props.date}</div>
                <div className="date-place-block-place">{this.props.place}</div>
            </div>
        );
    }

}