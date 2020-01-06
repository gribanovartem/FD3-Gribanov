import React from 'react';
import './BR2JSX.css';
import PropTypes from "prop-types";

class BR2JSX extends React.Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
    };
    render() {
        let wordsArr = this.props.text.match(/[А-Я,а-я]+/g);
        let element = [];
        wordsArr.forEach(item=>element.push(item, <br/>));
        return (
            <div className='main'>{element}</div>
        )
    }
}

export default BR2JSX;