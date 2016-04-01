import React from 'react';

export default class YandexMaps extends React.Component {

    static defaultProps = {
        videoId: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="yandex-maps-container">
                <div id="map" className="yandex-maps-block"></div>
            </div>
        );
    }

}