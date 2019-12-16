import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            words: this.props.words,
            regexp: /[а-яА-Я]*/,
        };
        this.checked= this.checked.bind(this);
        this.changeText= this.changeText.bind(this);
    }
    checked() {
        if(this.state.checkbox===false) {
            let wordsToSorted = JSON.parse(JSON.stringify(this.props.words));// копирование Хэша
            this.setState({checkbox: true});
            this.setState({words: wordsToSorted.sort()});
            console.log(this.props.words);
        } else {
            this.setState({checkbox: false});
            this.setState({words: this.props.words});
            console.log(this.props.words);
        }
    }
    changeText(EO) {
        let textValue = EO.target.value;
        this.setState({regexp: new RegExp(textValue)})
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
                <input type='checkbox' onClick={this.checked}/>
                <input type='text' className='textInput' onChange={this.changeText}/>
                <button>Сброс</button><br/>
                <div className='textArea'>
                    {wordElements}
                </div>
            </div>
        )
    }
};
