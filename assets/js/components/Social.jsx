import React from 'react';

export default class Social extends React.Component {
    
    static defaultProps = {
        logoUrl: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="social-block">
                <img src={this.props.logoUrl} className="social-img"/>
            </div>
        );
    }

}