import React from 'react';
import './RainbowFrame.css';
import PropTypes from "prop-types";

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.array.isRequired,
    };
    render() {
        let items = this.props.children;
        this.props.colors.forEach(item=>(
            items = <div style={{border: '3px solid '+ item, padding: '5px', margin: '5px'}}>{items}</div>
        ));
        return (
                <div>{items}</div>
        )
    }
}

export default RainbowFrame;