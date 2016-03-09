import React from 'react';

export default class YoutubeVideo extends React.Component {

    static defaultProps = {
        videoId: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="youtube-video-wrapper">
                <div className="youtube-video-block">
                    <h2 className="youtube-video-block-header">Конференция онлайн</h2>
                    <div className="youtube-video-container">
                        <iframe width="560"
                                height="315"
                                src={"http://www.youtube.com/embed/" + this.props.videoId}
                                frameborder="0"
                                allowfullscreen
                            />
                    </div>
                </div>
            </div>
        );
    }

}