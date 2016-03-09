import React from 'react';

export default class FacebookComments extends React.Component {

    static defaultProps = {
        videoId: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="facebook-comments-container">
                <div className="fb-comments" data-href="http://127.0.0.1:8000/index.html" data-width="600" data-numposts="5" />
            </div>
        );
    }

}