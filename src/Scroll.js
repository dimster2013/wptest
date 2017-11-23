import React from 'react';

export default class Scroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0
        };
    }

    onScroll = event => {

        const {scrollStep, names, displayItems} = this.props;

        if (event.nativeEvent.wheelDelta > 0) {

            this.setState({
                position: Math.max(
                    this.state.position - scrollStep, 0)
            });
        } else {

            this.setState({
                position: Math.min(
                    this.state.position + scrollStep, names.length - displayItems)
            });
        }
    };

    render() {

        let displayedNames = this.props.names.slice(
            this.state.position,
            this.state.position + this.props.displayItems
        );

        return (
            <div className='container' id="container" onWheel={this.onScroll}>
                <div className="scroll">{displayedNames.map(
                    (name, index) => <div key={index}>{name}</div>)}
                </div>
            </div>
        );
    }
}