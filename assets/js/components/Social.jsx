import React from 'react';

export default class Social extends React.Component {
    
    static defaultProps = {
        logoUrl: '',
        socialUrl: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.socialUrl} className="social-block">
                <img src={this.props.logoUrl} className="social-img"/>
            </a>
        );
    }

}