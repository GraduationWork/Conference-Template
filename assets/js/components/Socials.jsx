import React from 'react';
import Social from './Social';

export default class Socials extends React.Component {
	
	static defaultProps = {
        socials: []
    }

    constructor(props) {
        super(props);
    }

	render() {
        return (
            <div className="speakers-block">
                {
                    this.props.socials.map(function(social) {
                        return <Social logoUrl={social.logoUrl} />;
                    })
                }
            </div>
        );
    }

}