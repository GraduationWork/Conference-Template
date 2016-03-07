import React from 'react';
import Navigation from './Navigation';
import Socials from './Socials';

export default class Header extends React.Component {
    
    static defaultProps = {
        navigation: [],
        socials: [],
        title: '',
        logoUrl: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="header-block">
                    <div className="header-info-socials-wrapper">
                        <div className="header-info-block">
                            <img src={this.props.logoUrl} className="header-logo" />
                            <h1 className="header-title">{this.props.title}</h1>
                        </div>
                        <Socials socials={this.props.socials} />
                    </div>
                    <Navigation navigation={this.props.navigation} />
                </div>
            </header>
        );
    }

}