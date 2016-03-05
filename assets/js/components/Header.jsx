import React from 'react';
import Navigation from './Navigation';
import Socials from './Socials';

export default class Header extends React.Component {
    
    static defaultProps = {
        navigation: [],
        socials: []
        title: '',
        logoUrl: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div>
                    <img src={this.props.logoUrl} className="logo-class" />
                    <h3>{this.props.title}</h3>
                </div>
                <Socials socials={this.props.socials} />
                <Navigation navigation={this.props.navigation} />
            </header>
        );
    }

}