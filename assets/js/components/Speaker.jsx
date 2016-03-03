import React from 'react';

export default class Speaker extends React.Component {
    
    static defaultProps = {
        name: '',
        description: '',
        profileDetailsUrl: '',
        photoUrl: ''
    }

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
        let name = this.props.name;
        let description = this.props.description;
        let profileDetailsUrl = this.props.profileDetailsUrl;
        let photoUrl = this.props.photoUrl;

        return (
            <div>
                <a href={profileDetailsUrl}>
                    <div className="speaker-block">
                        
                            <img src={photoUrl} className="speaker-img"/>
                            <div className="speaker-name">{name}</div>
                            <div className="speaker-description">{description}</div>
                    </div>
                </a>
            </div>
        );
    }

}