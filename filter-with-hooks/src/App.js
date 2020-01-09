import React, {useState, useEffect} from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = (props) => {
    const [checkbox, setCheckbox] = useState(false);
    const [textValue, setTextValue] = useState('');
    const [res, setRes] = useState(props.words);
    const [regexp, setRegexp] = useState(/[а-яА-Я]*/);
    const words = props.words;

    const discharge = () =>{
        setCheckbox(false);
        setTextValue('');
        setRes(props.words);
    }
    const checked = () =>{
        setCheckbox(!checkbox);
    }
    const changeText = (EO) =>{
        let textValue = EO.target.value;
        setTextValue(textValue);
        setRegexp(new RegExp(textValue));
    }
    useEffect(() => {
        let res = words;
            if(textValue) {
                res = words.filter((item)=> {
                        if (regexp.test(item)) {
                            return item;
                        }
                        return null;
                    }
                );
            } else {
                res = words.slice();
            }
            if(checkbox) {
                res = res.sort();
            }
            setRes(res);
    },[words, textValue, checkbox, regexp]);
    let wordElements = res.map((item, index)=> {
        return (<p key={index}>{item}</p>)
    });
    return (
        <div className='filter'>
            <input type='checkbox' onChange={()=>checked()} checked={checkbox}/>
            <input type='text' className='textInput' onChange={(EO)=>changeText(EO)} value={textValue}/>
            <button onClick={()=>discharge()}>Сброс</button><br/>
            <div className='textArea'>
                {wordElements}
            </div>
        </div>
    )
}
export default App;
App.propTypes = {
    words: PropTypes.array,
};