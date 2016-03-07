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
            <div className="socials-block">
                {
                    this.props.socials.map(function(social) {
                        return <Social logoUrl={social.logoUrl} socialUrl={social.socialUrl} />;
                    })
                }
            </div>
        );
    }

}