import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            words: this.props.words,
            regexp: /[а-яА-Я]*/,
            textValue: '',
        };
        this.checked= this.checked.bind(this);
        this.changeText= this.changeText.bind(this);
        this.discharge= this.discharge.bind(this);
    }
    checked() {
        if(this.state.checkbox===false) {
            let wordsToSorted = JSON.parse(JSON.stringify(this.props.words));// копирование Хэша
            this.setState({checkbox: true});
            this.setState({words: wordsToSorted.sort()});
        } else {
            this.setState({checkbox: false});
            this.setState({words: this.props.words});
        }
    }
    changeText(EO) {
        let textValue = EO.target.value;
        this.setState({regexp: new RegExp(textValue), textValue: textValue})
    }
    discharge() {
        this.setState({checkbox: false, words: this.props.words, regexp: /[а-яА-Я]*/, textValue: ''});
    }
    render() {
        let wordElements = this.state.words.map((item, index)=> {
                if (this.state.regexp.test(item)) {
                    return (<p key={index}>{item}</p>)
                }
            }
        );
        return (
            <div className='filter'>
                <input type='checkbox' onClick={this.checked} checked={this.state.checkbox}/>
                <input type='text' className='textInput' onChange={this.changeText} value={this.state.textValue}/>
                <button onClick={this.discharge}>Сброс</button><br/>
                <div className='textArea'>
                    {wordElements}
                </div>
            </div>
        )
    }
};
