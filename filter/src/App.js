import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            words: this.props.words,
        };
        this.checked= this.checked.bind(this);
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
    render() {
        let wordElements = this.state.words.map((item, index)=>
            <p key={index}>{item}</p>
        );
        return (
            <div className='filter'>
                <input type='checkbox' onClick={this.checked}/>
                <input type='text' className='textInput'/>
                <button>Сброс</button><br/>
                <div className='textArea'>
                    {wordElements}
                </div>
            </div>
        )
    }
};
