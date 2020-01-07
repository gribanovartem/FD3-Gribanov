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
        wordsArr.forEach((item,i)=>(i!==wordsArr.length-1)?element.push(item, <br/>):element.push(item));
        return (
            <div className='main'>{element}</div>
        )
    }
}

export default BR2JSX;