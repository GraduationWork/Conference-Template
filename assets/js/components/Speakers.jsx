import React from 'react';
import Speaker from './Speaker';

export default class Speakers extends React.Component {
	
	static defaultProps = {
        speakers: []
    }

    constructor(props) {
        super(props);
    }

	render() {
        return (
            <div className="speakers-block">
                {
                    this.props.speakers.map(function(speaker) {
                        return <Speaker name={speaker.name}
                                description={speaker.description}
                                profileDetailsUrl={speaker.profileDetailsUrl}
                                photoUrl={speaker.photoUrl}
                            />;    
                    })
                }
            </div>
        );
    }

}