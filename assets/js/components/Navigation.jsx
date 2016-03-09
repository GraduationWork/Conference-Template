import React from 'react';

export default class Navigation extends React.Component {
    
    static defaultProps = {
        navigation: []
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navigation-block">
                <ul className="navigation-list">
                {
                    this.props.navigation.map(function(nav) {
                        return (
                            <li className="navigation-element">
                                <a href={nav.link} className="navigation-element-text">{nav.title}</a>
                            </li>
                        );    
                    })
                }
                </ul>
            </nav>
        );
    }

}