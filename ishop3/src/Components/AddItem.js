import React from 'react';
import './AddItem.css';
import PropTypes from 'prop-types';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            itemNameError: true,
            itemPrice: '',
            itemPriceError: true,
            itemURL: '',
            itemURLError: true,
            itemBalance: '',
            itemBalanceError: true,
            disabled: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(EO) {
        const name = EO.target.name;
        const value = EO.target.value;
        this.setState({[name]: value}, changeError);
        function changeError() {
            switch (name) {
                case 'itemName':
                    if(this.state.itemName !=='') {
                        this.setState({itemNameError: false}, changeDisabled);
                    } else {
                        this.setState({itemNameError: true}, changeDisabled);
                    }
                    break;
                case 'itemPrice':
                    if(Number(this.state.itemPrice) >0 && !isNaN(Number(this.state.itemPrice))) {
                        this.setState({itemPriceError: false}, changeDisabled);
                    } else {
                        this.setState({itemPriceError: true}, changeDisabled);
                    }
                    break;
                case 'itemURL':
                    if(this.state.itemURL !=='') {
                        this.setState({itemURLError: false}, changeDisabled);
                    } else {
                        this.setState({itemURLError: true}, changeDisabled);
                    }
                    break;
                case 'itemBalance':
                    if(Number(this.state.itemBalance) >=0 && this.state.itemBalance!=='' && !isNaN(Number(this.state.itemBalance))){
                        this.setState({itemBalanceError: false}, changeDisabled);
                    } else {
                        this.setState({itemBalanceError: true}, changeDisabled);
                    }
                    break;
            }
            function changeDisabled() {
                if(!this.state.itemNameError&&!this.state.itemPriceError&&!this.state.itemURLError&&!this.state.itemBalanceError) {
                    this.setState({disabled: false});
                } else {
                    this.setState({disabled: true});
                }
            }
        }
    }

    render() {
        return (
            <form className='addItem'>
                <p>id: {this.props.lastId+1}</p>
                <label>
                    Имя
                    <input name='itemName' type='text' value={this.state.itemName} onChange={this.handleChange}/>
                    {this.state.itemNameError && <span className='errorValidation'>Имя не должно быть пустым</span>}
                </label><br/>
                <label>
                    Цена
                    <input name='itemPrice' type='text' value={this.state.itemPrice} onChange={this.handleChange}/>
                    {this.state.itemPriceError && <span className='errorValidation'>Цена должна быть числом больше нуля</span>}
                </label><br/>
                <label>
                    URL
                    <input name='itemURL' type='text' value={this.state.itemURL} onChange={this.handleChange}/>
                    {this.state.itemURLError && <span className='errorValidation'>Url не должен быть пустым</span>}
                </label><br/>
                <label>
                    Остаток
                    <input name='itemBalance' type='text' value={this.state.itemBalance} onChange={this.handleChange}/>
                    {this.state.itemBalanceError && <span className='errorValidation'>Остаток должен быть положительным числом</span>}
                </label><br/>
                <input className='button' type='submit' value='Добавить' disabled={this.state.disabled}/>
                <input className='button' type='button' value='Отмена'/>
            </form>
        )
    }
}
export default AddItem;
AddItem.propTypes = {
    lastId: PropTypes.number,
};