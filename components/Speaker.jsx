import React from 'react';

export default class Speaker extends React.Component {

	constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount2")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount2")
    }

	render() {
        return (
            <div>Hello Speaker</div>
        );
    }

}