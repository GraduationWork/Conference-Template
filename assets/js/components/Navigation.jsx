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
                <ul>
                {
                    this.props.navigation.map(function(nav) {
                        return (
                            <li>
                                <a href="{nav.link}">{nav.title}</a>
                            </li>
                        );    
                    })
                }
                </ul>
            </nav>
        );
    }

}