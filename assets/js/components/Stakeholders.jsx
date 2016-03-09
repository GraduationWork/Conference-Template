import React from 'react';

export default class Stakeholders extends React.Component {

    static defaultProps = {
        background: '',
        stakeholders: []
    }

    constructor(props) {
        super(props);
    }

    render() {

        var divStyle = {
            backgroundImage: 'url(' + this.props.background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
        };

        return (
            <div className="stakeholders-wrapper" style={divStyle}>
                <div className="stakeholders-block">
                    <h2 className="stakeholders-block-header">Кому будет интересно?</h2>
                    <div className="stakeholders-blocks-container">
                        {
                            this.props.stakeholders.map(function(stakeholder) {
                                return (
                                    <div className="stakeholder-block">{stakeholder.text}</div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}