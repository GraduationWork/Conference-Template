import React from 'react';
import Speakers from './Speakers';
import Timedown from './Timedown';
import Header from './Header';
import ConferenceBanner from './ConferenceBanner';

export default class ReactApp extends React.Component {

    static defaultProps = {
        content: {
            start: Date.now()/1000,
            speakers: []
        }
    }

	constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount23")
    }

    componentDidMount() {
        console.log("componentDidMount3")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount23")
    }

	render() {
		let content = this.props.content;
        console.log(content)
        return (
            <div>
                <Header title={content.title}
                        logoUrl={content.logoUrl}
                        navigation={content.navigation}
                        socials={content.socials} />
                <ConferenceBanner times={content.times}
                    background={content.background}/>
                <Speakers speakers={content.speakers} />
            </div>
        );
    }

}