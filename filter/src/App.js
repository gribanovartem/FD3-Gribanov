import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            words: this.props.words,
            regexp: /[а-яА-Я]*/,
            textValue: '',
            res: this.props.words,
        };
        this.checked= this.checked.bind(this);
        this.changeText= this.changeText.bind(this);
        this.discharge= this.discharge.bind(this);
    }

    checked() {
            this.setState({checkbox: !this.state.checkbox},this.discharge);
    }
    changeText(EO) {
        let textValue = EO.target.value;
        this.setState({regexp: new RegExp(textValue), textValue: textValue}, this.discharge);
    }
    discharge() {
        let res = this.state.words;
        if(this.state.textValue) {
            res = this.state.words.filter((item)=> {
                        if (this.state.regexp.test(item)) {
                            return item;
                        }
                        return null;
                    }
                );
        } else {
            res = this.state.words.slice();
        }
        if(this.state.checkbox) {
            res = res.sort();
        }
        this.setState({res: res})
    }
    render() {
        let wordElements = this.state.res.map((item, index)=> {
                    return (<p key={index}>{item}</p>)
            }
        );
        return (
            <div className='filter'>
                <input type='checkbox' onChange={this.checked} checked={this.state.checkbox}/>
                <input type='text' className='textInput' onChange={this.changeText} value={this.state.textValue}/>
                <button onClick={this.discharge}>Сброс</button><br/>
                <div className='textArea'>
                    {wordElements}
                </div>
            </div>
        )
    }
};
App.propTypes = {
    words: PropTypes.array,
};