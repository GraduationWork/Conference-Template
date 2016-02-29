import React from 'react';

export default class Speaker extends React.Component {

	constructor(props) {
        super(props);
        this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

	render() {
        return (
            <div>Hello Speaker</div>
        );
    }

}